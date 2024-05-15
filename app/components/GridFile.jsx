import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Download } from "@mui/icons-material";

const GridFile = ({listFile, visibilityShow, visibilityHide}) => {
  return (
    <Box sx={{display: "block", width: "100%", height: "800px", backgroundColor: "skyblue"}}>
      <Box sx={{width: "100%", height: "10%", display: "flex", flexDirection: "row", backgroundColor: "lightgrey", alignItems: "center", paddingRight: "15px"}}>
        <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            Nama
          </Typography>
        </Box>
        <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            Created User
          </Typography>
        </Box>
        <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            Created Date
          </Typography>
        </Box>
        <Box sx={{width: "10%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            File Size
          </Typography>
        </Box>
        <Box sx={{width: "10%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            Format
          </Typography>
        </Box>
        <Box sx={{width: "20%", display: "flex", justifyContent: "flex-start"}}>
          <Typography sx={{color: "gray", fontFamily: "Inter", fontSize: "16px", fontWeight: 600}}>
            Action
          </Typography>
        </Box>
      </Box>
      <Box sx={{width: "100%", height: "90%", display: "grid", overflowY: "scroll", "::-webkit-scrollbar": {width: "15px", borderRadius: "5px"}, "::-webkit-scrollbar-track": {boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)", borderRadius: "5px"}, "::-webkit-scrollbar-thumb": {backgroundColor: "lightgray", borderRadius: "5px"}}}>
        {listFile && listFile.map((file, index) => (
          <Box sx={{width: "100%", height: "100px", display: "flex", flexDirection: "row"}}>
            <Box sx={{width: "20%", display: "flex", alignItems: "center"}}>
              <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                {file.fileName}
              </Typography>
            </Box>
            <Box sx={{width: "20%", display: "flex", alignItems: "center"}}>
              <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                {file.createdUser}
              </Typography>
            </Box>
            <Box sx={{width: "20%", display: "flex", alignItems: "center"}}>
              <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                {file.createdAt}
              </Typography>
            </Box>
            <Box sx={{width: "10%", display: "flex", alignItems: "center"}}>
              <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                {file.size}
              </Typography>
            </Box>
            <Box sx={{width: "10%", display: "flex", alignItems: "center"}}>
              <Typography sx={{color: "grey", fontFamily: "Inter", fontSize: "14px"}}>
                {file.format}
              </Typography>
            </Box>
            <Box sx={{width: "20%", display: "flex", flexDirection: "row"}}>
              {listFile[index].format === "pdf" && (
                listFile[index].view ? (
                  <IconButton onClick={() => visibilityHide(index)}>
                    <VisibilityIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => visibilityShow(index)}>
                    <VisibilityOffIcon />
                  </IconButton>
                )
              )}
              <IconButton>
                <Download />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GridFile
