import {React,useState,useContext,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import insta from '../../styles/assets/logo.png'
import Button from '@mui/material/Button';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {AuthContext} from '../../context/auth'
function index() {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const[name,setName]=useState('')
  const [file,setFile] = useState(null)
  const {signup,user} = useContext(AuthContext)
  const handleClick= async ()=>{
    

    try{
    setLoading(true)
    setError('')
    await signup(email,password)
    console.log('signed-up')
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
    <div className='signup-container'>
<div className="signup-card">
    <Image src={insta}/>

<TextField id="outlined-basic" size="small" margin='dense' label="Email"  variant="outlined" fullWidth value={email} onChange={((e)=>setEmail(e.target.value))} />

<TextField id="outlined-basic" size="small" margin='dense'type='password' label="Password" variant="outlined" fullWidth value={password} onChange={((e)=>setPassword(e.target.value))} />

<TextField id="outlined-basic" size="small" margin='dense' label="Full-Name" type='text'variant="outlined" fullWidth value={name} onChange={((e)=>setName(e.target.value))} />
<Button variant="outlined" component="label" fullWidth style={{marginTop:"1rem"}}>
        
  <input type='file'   accept='image/*' style={{display:'none'}}  onChange={((e)=>setFile(e.target.files[0]))} />  
  Upload
      </Button>
      <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>
        
   
  SignUp
      </Button>


</div>
<div className='bottom-card'>
Already have an account?<Link href='/login'> <span style={{color:'blue'}}>Login</span></Link>

</div>
<div></div>
    </div>
  )
}

export default index