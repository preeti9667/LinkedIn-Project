'use client'
import React,{useEffect,useState} from 'react'
import Layout from '../feed/Layout'
import Footer from '../feed/Footer'; 
import moment from 'moment';

 import { dataStore,} from '@/constants/data.constant';
 import styled from '@/app/feed/feed.module.css'

import nookies from 'nookies';
import { Avatar, AvatarGroup, Box, Button, Paper, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import style from './connection.module.css'
const Connections =  () => {
  const [userId, setUserId] = useState('');
    const [openNetwork, setOpenNetwork] = useState(false)


  useEffect(() => {
    const cookies = nookies.get(null);
    if (cookies.loggedInUser) {
      setUserId(cookies.loggedInUser);
    }
  }, []);


  const loginUser = Number(userId)


  const connectedUsers = dataStore.connections(loginUser)


const handleOpenNetwork =()=>{
  setOpenNetwork(!openNetwork)
}
 
    
       

  return (

        <Layout>
         <Grid container spacing={2} sx={{margin:'0 65px', gap:'30px'}}>
          <Grid size={3.2} >
            <Box sx={{position:'fixed'}}>
            <Paper
                sx={{
                  height: openNetwork? '400px' : '50px',
                  textTransform: 'none',
                  marginBottom:'10px' }} >

                    <Box sx={{
                      display:'flex',
                      justifyContent:'space-around',
                      alignItems:'center',
                      height:'50px'
                       }}>
                <Typography >Manage my network</Typography>

              <Button onClick={handleOpenNetwork} disableRipple 
              sx={{borderRadius:'30px', minWidth:'40px',height:'37px'}}>

              {openNetwork ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
              </Button></Box>
              <hr/>
            {openNetwork &&(  <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <Button disableRipple className={style.openNetworkBtn} >   Connections</Button>
              <Button disableRipple className={style.openNetworkBtn} >Following & followers</Button>
              <Button disableRipple  className={style.openNetworkBtn}>Groups</Button>
              <Button disableRipple  className={style.openNetworkBtn}>Events</Button>
              <Button disableRipple className={style.openNetworkBtn} >Pages</Button>
              <Button disableRipple className={style.openNetworkBtn} >Newsletters</Button>
              <Button disableRipple className={style.openNetworkBtn} >Hashtags</Button>

              </Box>)}
            </Paper>
          <Footer/></Box>
          </Grid>
          <Grid size={8.4} sx={{display:'flex', gap:'20px', flexDirection:'column'}}>
            <Paper sx={{height:'50px',display:'flex', alignItems:'center', padding:'0 10px'}}>
              <Button disableRipple className={style.paperBtn}>
                    Grow
              </Button>
              <Button disableRipple className={style.paperBtn} >Catch Up</Button>
            </Paper>
            <Paper sx={{display:"flex", padding:'0 10px', alignItems:'center', justifyContent:'space-between'}}>
              <Typography>
              No pending invitations
              </Typography>
              <Button disableRipple className={style.paperBtn}>Manage</Button>
            </Paper>
            <Paper sx={{padding: '15px'}}>
              <Typography>Job search smarter</Typography>
              
              <Typography sx={{color:'#3a252570'}}
              >See who’s viewed your profile and directly message recruiters with InMail.</Typography>
              <Box sx={{display:'flex', alignItems:'center'}}>
                <AvatarGroup total={3}>
                      <Avatar alt="Remy Sharp" className={style.GroupAvatar} 
                      src="https://img.freepik.com/premium-photo/man-with-beard-black-suit-with-red-background_1256048-1605.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid" />
                      <Avatar alt="Remy Sharp" className={style.GroupAvatar} 
                      src="https://img.freepik.com/premium-photo/business-photo-men-women_1281985-659.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid" />
                      <Avatar alt="Remy Sharp" className={style.GroupAvatar} 
                      src="https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid" />
                </AvatarGroup>
                <Typography  sx={{color:'#3a252570'}} variant='body2' >
                  Millions of members use Premium</Typography>
              </Box>
              <Button disableRipple  className={style.paperPremiumBtn} >
                Try premium for 0</Button>
              <Typography sx={{color:'#3a252570'}} variant='body2'>
                1 month free with access to 24/7 support. Cancel anytime. We’ll send you a reminder 7 days before your trial ends.</Typography>
            </Paper>

            <Paper sx={{marginBottom:'30px', padding:'15px'}}>
              <Typography variant='h4'>Connections  {connectedUsers.length}</Typography>
                       
               {
                connectedUsers.map((text,index)=>(
                  <Box key={index}>
                    <Box  sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <Box sx={{display:'flex',margin:'30px 0',  gap:'10px', alignItems:'center'}}>
                  <Avatar className={styled.GridItemAvatar}>{ text.user.name ? String(text.user.name[0]):''}</Avatar>
                    <Box>
                  <Typography>{text.user.name}</Typography>
                  <Typography>{text.user.position}</Typography>
                  <Typography sx={{color: '#00000063'}}>connected {moment(text.createdAt).fromNow()}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{display:'flex', gap:'10px'}}>
                    <Button disableRipple className={style.paperBtn}
                    sx={{border:'1px solid blue', borderRadius:'20px'}}>Message</Button>
                    <Button disableRipple  sx={{borderRadius:'50px', minWidth:'40px',height:'37px',position:'inherit'}}>
                      <MoreHorizIcon/></Button>
                  </Box>
                </Box>
                
                <hr/>
                </Box>
               )) }
            </Paper>

          </Grid>
         </Grid>
        </Layout>
      
 
  )
}
export default Connections;