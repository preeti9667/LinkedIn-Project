

import React from 'react'
import Image from 'next/image'
import style from '@/app/style/home.module.css'
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {  Avatar, Container,  Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HomeMain() {
  return (
    <Box>
      <Container sx={{marginTop: '4rem'}}>
      
        <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}  >
        <h1 className={style.h1}>Welcome to your <br/>professional community</h1>
          <Box  className={style.heroBtnFlex}>
       <Link href='' className={style.heroBtnFlexGoo}> Google  </Link>
            <Link href='' className={style.heroBtnFlexSign}>
               Sign in with email </Link> 
              
            <p className={style.heroBtnFlexP}>
                By clicking Continue to join or sign in, you agree to LinkedIn’s
                <Link href='' className={style.heroBtnFlexPLink}>
                 User <br/> Agreement</Link>,
                <Link href='' className={style.heroBtnFlexPLink} >
                Privacy Policy</Link>,  and
                <Link href=' ' className={style.heroBtnFlexPLink}>
                  Cookie Policy</Link>.</p>
        </Box>
        <p  className={style.heroBtnFlexPp}>
            New to LinkedIn
            <Link href=''  className={style.heroBtnFlexPLink}>join now</Link>
        </p>
        </Grid>
        <Grid item xs={6}>
        <Image src="file:///C:/Users/HP/Downloads/dxf91zhqd2z6b0bwg85ktm5s4%20(1).svg" 
        alt='welcome to ' 
       width={500} height={600}
        />
</Grid>
       </Grid>
      </Container>
      <Container sx={{marginTop: '4rem',padding:'34px'}}>
      <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
        <Typography variant='h4'>
        Explore collaborative articles</Typography>
        <Typography variant='h6'>
        We’re unlocking community knowledge in a new<br/> way.
         Experts add insights directly into each<br/>
         article, started with the help of AI.
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <ol  className={style.heroListBtn} >  
           <li> <Link href='' className={style.gridBtnList}>
              Marketing</Link></li> 
       <li> <Link href='' className={style.gridBtnList}>
           Public Administration</Link></li> 
   <li><Link href='' className={style.gridBtnList}>
            Healthcare</Link></li> 
      <li><Link href='' className={style.gridBtnList}>
           Engineering</Link></li>
           <li><Link href='' className={style.gridBtnList}>IT Services</Link> </li>
           <li><Link href='' className={style.gridBtnList}>Sustainability </Link> </li>
           <li><Link href='' className={style.gridBtnList}>Business Administration</Link> </li>
           <li><Link href='' className={style.gridBtnList}>Telecommunications</Link> </li> 
           <li><Link href='' className={style.gridBtnList}>HR Management</Link> </li>
        <li><Link href='' className={style.gridListBtn} >
      Show all</Link></li>
            
       </ol>
        </Grid>
        </Grid>
      </Container>
      <Container sx={{marginTop: '4rem',padding:'34px'}}>
      <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant='h4'>Find the right job or<br/> internship for you</Typography>
            </Grid>

            <Grid item xs={6} sx={{display:'flex',flexDirection:"column",}}>
       <ol className={style.heroListBtn}>
        <li>
        <Link href='' className={style.gridBtnList}> Engineering</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Business Development</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Finance</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Administrative Assistant</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Retail Associate</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Customer Service</Link>
        </li> <li>
        <Link href='' className={style.gridBtnList}>Operations</Link>
        </li> <li>
        <Link href='' className={style.gridBtnList}>Information Technology</Link>
        </li>
        <li>
        <Link href='' className={style.gridBtnList}>Marketing</Link>
        </li> <li>
        <Link href='' className={style.gridBtnList}>Human Resources</Link>
        </li>
       </ol>
             
                <Box>
                  <Link href=''  className={style.gridBtnList2} >
                 Engineering < ExpandMoreIcon/></Link></Box>
              
            </Grid>

            </Grid>

            </Container>
            <Box sx={{background:"#F1ECE5"}}>
            <Container sx={{marginTop: '4rem',padding:'34px'}}className={style.fullColorCon}>
              <Typography variant='h4' sx={{color:'#B24020'}}>
                Post your job for millions of people to see</Typography>
              {/* <Button> */}
                <Link href='' className={style.gridListBtn}
                >Post a job</Link>
              {/* </Button> */}
              </Container> </Box>

              <Container sx={{marginTop: '4rem',padding:'34px'}}>
      <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
        <Typography variant='h4'>
        Discover the best software <br/>tools
</Typography>
        <Typography variant='h6'>
        Connect with buyers who have first-hand <br/>
        experience to find the best products for you.
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <ol  className={style.heroListBtn} >  
           <li> <Link href='' className={style.gridBtnList}>
              E-Commerce Platforms</Link></li> 
       <li> <Link href='' className={style.gridBtnList}>
           CRM Software</Link></li> 
   <li><Link href='' className={style.gridBtnList}>
            Human Resources Management Systems</Link></li> 
      <li><Link href='' className={style.gridBtnList}>
           Recruiting Software</Link></li>
           <li><Link href='' className={style.gridBtnList}>Sales Intelligence Software</Link> </li>
           <li><Link href='' className={style.gridBtnList}>Project Management Software </Link> </li>
           <li><Link href='' className={style.gridBtnList}>Help Desk Software</Link> </li>
           <li><Link href='' className={style.gridBtnList}>Social NetWorking SoftWare</Link> </li> 
           <li><Link href='' className={style.gridBtnList}>Desktop Publishing Software</Link> </li>
        <li><Link href='' className={style.gridListBtn} >
      Show all</Link></li>
            
       </ol>
        </Grid>
        </Grid>
     
      <Container sx={{marginTop: '4rem',padding:'34px'}}>
      <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
        <Typography variant='h4'>
        Keep your mind sharp with<br/> games
</Typography>
        <Typography variant='h6'>
        Take a break and reconnect with your network<br/>
         through quick daily games.
        </Typography>
        </Grid>
        <Grid item xs={6} sx={{paddingTop:'68px'}}>
        <ol  className={style.heroListBtn} >  
           <li> <Link href='' className={style.gridBtnList}>
              Pinpoint</Link></li> 
       <li> <Link href='' className={style.gridBtnList}>
           Queens</Link></li> 
   <li><Link href='' className={style.gridBtnList}>
          Crossclimb</Link></li> 

            
       </ol>
        </Grid>
        </Grid>
      </Container>
      </Container>
      <Box sx={{background:"#F1ECE5"}}>
      <Container sx={{marginTop: '4rem',padding:'40px 12px'}}>
      <Grid container rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
        <Typography variant='h4' sx={{color:'#B24020'}}>
        Let the right people know you’re open to work
</Typography>
        <Typography variant='h6'>
        With the Open To Work feature, you can privately tell recruiters
         or publicly share with the LinkedIn community that you are
          looking for new job opportunities.
        </Typography>
        </Grid>
        <Grid item xs={6} sx={{paddingTop:'68px'}}>
        <Image src='' alt='image' width={500} height={500}/>
        </Grid>
        </Grid>
      </Container></Box>
      <Box>
        <Image
         src='file:///C:/Users/HP/Downloads/43h6n82li4xu0q23s8jqizk6j%20(1).svg' 
         alt='hello'
        height={300} width={300}/>
        <Avatar alt='hekai' src="file:///C:/Users/HP/Downloads/43h6n82li4xu0q23s8jqizk6j%20(1).svg"/>
      </Box>
    </Box>
  )
}
