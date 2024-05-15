import { Box } from '@mui/material'
import GridFile from './GridFile'
import FileViewer from './FileViewer'

const Body = ({ listFile, visibilityShow, visibilityHide }) => {
  return (
    <Box sx={{width: "100%", height: "85%", display: "flex", justifyContent: "center"}}>
        <Box sx={{width: "100%", height: "100%", display: "grid", overflowY: "scroll", "::-webkit-scrollbar": {width: "20px", borderRadius: "5px"}, "::-webkit-scrollbar-track": {boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)", borderRadius: "5px"}, "::-webkit-scrollbar-thumb": {backgroundColor: "lightgray", borderRadius: "5px"}}}>
            <GridFile listFile={listFile} visibilityHide={visibilityHide} visibilityShow={visibilityShow}/>
            <FileViewer />
        </Box>
    </Box>
  )
}

export default Body
