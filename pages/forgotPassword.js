import React, { useState,useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import insta from '../styles/assets/logo.png'
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../styles/assets/bg1.png'
import bg2 from '../styles/assets/bg2.png'
import bg3 from '../styles/assets/bg3.png'
import {AuthContext} from '../context/auth'
import {useRouter} from 'next/router'



function index() {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  
  const {forgot,user} = useContext(AuthContext)
  const handleClick= async ()=>{
    
    try{
    setLoading(true)
    setError('')
    await forgot(email)
    console.log('email sent')
    router.push('/login')
    }
    catch(err){
      console.log(error)
       setError(err.message)
       setTimeout(()=>{
        setError('')
       }) 
       setLoading(false)
  }}
  
  return (
    <div className='login-container'>
      <div className="carbg">
        <div className='car'>
        </div>
        </div>
      
      <div>
<div className="login-card">
    <Image src={insta}/>
<TextField id="outlined-basic" size="small" margin='dense' label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} />

{
  error !=''&&<div style={{color:'red'}}>{error}</div>
}

      <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>
  Send Email
      </Button>
      
</div>
<div className='bottom-card'>
Don't have an account? <span style={{color:'blue'}}>Sign Up</span>
</div>
</div>

    </div>
  )
}

export default index