import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({username, zona}) => {
  return (
    <Box sx={{width: "100%", height: "15%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#4B82C5"}}>
        <Box sx={{left: "5%", position: "fixed"}}>
            <Typography variant="h3">
                {zona}
            </Typography>
        </Box>
        <Box sx={{right: "5%", position: "fixed", display: "flex", flexDirection: "row", justifyContent: "space-around", columnGap: "20px"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <AccountCircleIcon sx={{width: "40px", height: "40px"}}/>
                <Typography>{username}</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Button variant="contained" size="large" sx={{backgroundColor: "red", ":hover": {backgroundColor: "red"}}}>Logout</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Header
