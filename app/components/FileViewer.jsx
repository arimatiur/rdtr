import { Box } from '@mui/material'
import React from 'react'

const FileViewer = () => {
  return (
    <Box sx={{width: "100%", height: "800px", backgroundColor: "bisque"}}>
      <iframe style={{width: "100%", height: "100%"}}></iframe>
    </Box>
  )
}

export default FileViewer
