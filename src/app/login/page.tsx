'use client'
import { AppBar, Box,  Link, Toolbar, Typography,TextField, Snackbar,
   Button, IconButton,InputAdornment,} from '@mui/material'
import React,{useState} from 'react'
import style from '@/app/login/logIn.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Field, Form, Formik ,ErrorMessage} from 'formik';
import styled from '@/app/home/home.module.css'
import Footer from './Footer';
import { setCookie } from 'nookies';
import * as Yup from 'yup';
import {useRouter} from 'next/navigation';

import { dataStore } from "@/constants/data.constant";
// import AutohideSnackbar from '@/utils/snackbar';

interface FormValue{
  email :string,
  password: string,
}

const validationSchema = Yup.object({
  email:Yup.string().required('Please enter an email address or phone number.'),
  password:Yup.string().min(6, 'The password you provided must have at least 6 characters.').required()
  
})
export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState('');
 const router = useRouter()

 
 

 
 const handleSubmit = (values:FormValue)=>{
  console.log(values)
   const userAuthResponse = dataStore.userAuth(values.email);
   const {userId, success,message} = userAuthResponse;
   console.log(userAuthResponse)
  if(success){
    localStorage.setItem('loggedInUser',String(userId));
   
  
    setCookie(null, 'loggedInUser', String(userId), {
    })

    setMessages(message)
    setOpen(true)
     router.push('/feed')

  }
  else {

    setMessages(message)
      setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 1200);
   
  }
 }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  

  
 
  const initialValues:FormValue={email:'', password :''}


  return (
    <Box>
    
    <Snackbar open={open} message={messages}>
       </Snackbar>


     <AppBar sx={{background:"white", boxShadow:'none'}} position="static">
      <Toolbar>
     <Link href='/' sx={{display:'flex', alignItems:"center",}} underline='none'> 
     <Typography variant='h5' sx={{fontWeight:'800'}}>Linked</Typography>
  <LinkedInIcon/></Link>
     </Toolbar>
     </AppBar>
     <Box sx={{width:'100%', margin:'auto'}}>
    <Box className={style.form}> 
      <Box>
      <Typography variant='h4'>Sign in</Typography>
      <Typography variant='body1'>Stay updated on your professional world.</Typography>
      </Box>
      <Formik validationSchema={validationSchema} 
     initialValues={initialValues}
      onSubmit={handleSubmit}
        >{({handleBlur,handleChange,errors,touched,})=>(
        <Form className={style.formInput} >
            <Field as={TextField} name='email' label="Email or Phone"
             type='email'
            onBlur={handleBlur} onChange={handleChange}
            error={touched.email && errors.email}
            helperText={<ErrorMessage name='email'/>}
            />

           
           <Field as={TextField}  variant="outlined" name='password'
                onBlur={handleBlur} onChange={handleChange} label='password'
                  type={showPassword ? 'text' : 'password'}
            
            error={touched.password && errors.password}
          
            helperText={<ErrorMessage name='password'/>}

          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton
                sx={{fontSize:"small", color:"blue"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
               
                  edge="end"
                >
                  {showPassword ? 'hide' : 'show'}
                </IconButton>
              </InputAdornment>
            )
          }}
        
          />
        
        

          <Link href='' underline='none'>Forgot password?</Link>
            <Button type='submit' variant="contained" 
            sx={{textTransform:'none',padding:'10px 3px', borderRadius:'26px',fontSize:'large'}}
            >Sign in</Button>
        </Form>
        
      )}
      </Formik>
      <Box sx={{display:"flex", alignItems:'center', gap:"10px", marginTop:"10px"}}>
        <Box className={style.diBefore}></Box>
        <Typography>or</Typography>
        <Box className={style.diAfter}></Box>
      </Box>
      
      <Typography 
     variant='body2'sx={{fontSize:" x-small"}}
      >
                By clicking Continue to join or sign in, you agree to LinkedIn’s
                <Link href=''  underline="none">
                 User  Agreement</Link>,
                <Link href='' underline="none" >
                Privacy Policy</Link>,  and
                <Link href=' '
                 
                underline="none">
                  Cookie Policy</Link>.</Typography>
        <Box sx={{display:'flex', flexDirection:"column",gap:'9px',marginTop:'10px'}}>
        
          <Link href="" className={styled.heroBtnFlexGoo} underline='none'
          sx={{textAlign:'center', border:'1px solid #00000069'}} >
          Google</Link>
         
          <Link href='' className={style.signInApple} underline='none'>Sign in with Apple</Link>
        </Box>
    </Box>
    
   <Box sx={{width:'352px', margin:'20px auto',textAlign:'center'}}>
     <Typography   >
            New to LinkedIn?
            <Link href=''  underline="none">join now</Link>
        </Typography></Box>
</Box>
      <Footer/>
    </Box>
  )
}
