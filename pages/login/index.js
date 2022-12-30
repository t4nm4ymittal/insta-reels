import React, { useState,useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import insta from '../../styles/assets/logo.png'
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../styles/assets/bg1.png'
import bg2 from '../../styles/assets/bg2.png'
import bg3 from '../../styles/assets/bg3.png'
import {AuthContext} from '../../context/auth'
import {useRouter} from 'next/router'
import Link from 'next/link';


function index() {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  
  const {login,user} = useContext(AuthContext)
  const handleClick= async ()=>{
    
    try{
    setLoading(true)
    setError('')
    await login(email,password)
    console.log('logged in!')
    }
    catch(err){
      console.log(error)
       setError(err.message)
       setTimeout(()=>{
        setError('')
       }) 
       setLoading(false)
  }}
  useEffect(()=>{
    if(user)
    {
      router.push('/')
    }
  },[user])
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
<TextField id="outlined-basic" size="small" margin='dense'type='password' label="Password" variant="outlined" fullWidth  value={password} onChange={(e)=>setPassword(e.target.value)} />
{
  error !=''&&<div style={{color:'red'}}>{error}</div>
}

      <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>
  login
      </Button>
      <div style={{color:"blue",marginTop:'0.5rem'}}>Forget Password</div>
</div>
<div className='bottom-card'>
Don't have an account?<Link href="/signup"> <span style={{color:'blue'}}>Sign Up</span></Link>
</div>
</div>

    </div>
  )
}

export default index