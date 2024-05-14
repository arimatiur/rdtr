"use client"

import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";

export default function Home() {
  const [listFile, setListFile] = useState();
  const [username, setUsername] = useState();
  const [actions, setActions] = useState();

  useEffect(() => {
    const url = "https://dcktrp.jakarta.go.id/apigis/data/in/view-list-doc-dev?id=d089b0a4867c43ceb82c7f62d1183fa0";
    async function main() {
      fetch(url).then(response => response.json()).then(data => {
        const username = data.uss;
        setUsername(username);
        const listFile = data.list_file;
        setListFile(listFile);
        const actions = listFile.map((file) => {
          const object = {
            view: false,
            url: `https://dcktrp.jakarta.go.id/apigis/data/in/view/f?idf=${file.file_id}&uss=${username}`
          }
          return object
        })
        setActions(actions);
      })
    }
    main();
  }, []);

  const visibilityToggle = (index) => {
    setActions((prevState) => {
      const updatedActions = [...prevState];
      updatedActions[index] = {
        ...updatedActions[index],
        view: !updatedActions[index].view,
      };
      return updatedActions;
    });
  }

  return (
    <Box sx={{width: "100vw", height: "100vh", backgroundColor: "white", display: "flex", flexDirection: "column"}}>
      <Box sx={{width: "100%", height: "15%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#4B82C5"}}>
        <Box sx={{left: "10%", position: "fixed"}}>
          <Button variant="contained" sx={{backgroundColor: "green", ":hover": {backgroundColor: "green"}}}>
            Home
          </Button>
        </Box>
        <Box sx={{right: "0%", width: "20%", position: "fixed", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <AccountCircleIcon sx={{width: "40px", height: "40px"}}/>
            <Typography>{username}</Typography>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" sx={{backgroundColor: "red", ":hover": {backgroundColor: "red"}}}>Logout</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{width: "100%", height: "85%", display: "flex", position: "relative", justifyContent: "center"}}>
        <Box sx={{position: "absolute", top: "2%", width: "90%", height: "90%", backgroundColor: "bisque"}}>
          <Box sx={{width: "100%", height: "10%", display: "flex", flexDirection: "row", backgroundColor: "lightgrey", alignItems: "center", paddingRight: "10px"}}>
              <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
                <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>Nama</Typography>
              </Box>
              <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
                <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>Created User</Typography>
              </Box>
              <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
                <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>Created Date</Typography>
              </Box>
              <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
                <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>File Size</Typography>
              </Box>
              <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
                <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>Action</Typography>
              </Box>
          </Box>
          <Box sx={{width: "100%", height: "90%",  display: "grid", gridGap: "10px", overflowY: "scroll", "::-webkit-scrollbar": {width: "10px", borderRadius: "5px"}, "::-webkit-scrollbar-track": {boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)", borderRadius: "5px"}, "::-webkit-scrollbar-thumb": {backgroundColor: "lightgray", borderRadius: "5px"}}}>
            {listFile && listFile.map((file, index) => (
              <Box sx={{width: "100%", height: "100px", display: "flex", flexDirection: "row"}}>
                <Box sx={{width: "20%"}}>
                  <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                    {file.namefile}
                  </Typography>
                </Box>
                <Box sx={{width: "20%"}}>
                  <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                    {file.namefile}
                  </Typography>
                </Box>
                <Box sx={{width: "20%"}}>
                  <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                    {file.created_user}
                  </Typography>
                </Box>
                <Box sx={{width: "20%"}}>
                  <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                    {file.created_at}
                  </Typography>
                </Box>
                <Box sx={{width: "20%", display: "flex", flexDirection: "row"}}>
                  {actions[index].view ? (
                    <IconButton onClick={() => visibilityToggle(index)}>
                      <VisibilityOffIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => visibilityToggle(index)}>
                      <VisibilityIcon />
                    </IconButton>
                  )}
                  <IconButton>
                    <Download />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
}
