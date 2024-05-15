"use client"

import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";
import Header from "./components/Header";
import Body from "./components/Body";

export default function Home() {
  const [listFile, setListFile] = useState();
  const [username, setUsername] = useState();
  const [zona, setZona] = useState();

  useEffect(() => {
    const url = "https://dcktrp.jakarta.go.id/apigis/data/in/view-list-doc-dev?id=d089b0a4867c43ceb82c7f62d1183fa0";
    async function main() {
      fetch(url).then(response => response.json()).then(data => {
        const username = data.uss;
        setUsername(username);
        const zona = data.zona;
        setZona(zona);
        const listFile = data.list_file;
        setListFile(listFile);
        const files = listFile.map((file) => {
          const fileName = file.namefile;
          const fileId = file.file_id;
          const fileFormat = fileName.split(".")[fileName.split(".").length -1];
          const url = `https://dcktrp.jakarta.go.id/apigis/data/in/view/f?idf=${fileId}&uss=${username}`;
          const createdUser = file.created_user;
          const createdAt = file.created_at;
          const size = file.size;
          const object = {
            fileName: fileName,
            fileId: fileId,
            createdAt: createdAt,
            createdUser: createdUser,
            size: size,
            view: false,
            url: url,
            format: fileFormat === "lsx" ? "xls" : fileFormat 
          }
          return object
        })
        setListFile(files);
      })
    }
    main();
  }, []);

  const visibilityShow = (index) => {
    setListFile((prevState) => {
      const updatedActions = prevState.map((action, i) => ({
        ...action,
        view: index === i,
      }));
      return updatedActions;
    });
  };
  
  const visibilityHide = (index) => {
    setListFile((prevState) => {
      const updatedActions = [...prevState];
      updatedActions[index] = {
        ...updatedActions[index],
        view: false,
      };
      return updatedActions;
    });
  };

  return (
    <Box sx={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "white"}}>
      <Header username={username} zona={zona}/>
      <Body listFile={listFile} visibilityHide={visibilityHide} visibilityShow={visibilityShow}/>
    </Box>
  );
}
