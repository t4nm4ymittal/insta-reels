import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className='upload-btn'><Button startIcon={<MovieIcon/>}variant="outlined" component="label" fullWidth style={{marginTop:"1rem"}}>
        
    <input type='file'   accept='image/*' style={{display:'none'}} />  
    Upload
        </Button>
        <LinearProgress variant="determinate" style={{marginTop:"0.2rem"}} value={50} />
        </div>
  )
}

export default Upload