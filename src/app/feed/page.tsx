"use client"

import Image from 'next/image'
import { Avatar, Box, Button, Link, Typography, } from '@mui/material'
import React, { useState, useEffect, } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Layout from './Layout';
import Search from './Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import moment from 'moment';
import PublicIcon from '@mui/icons-material/Public';

import style from '@/app/feed/feed.module.css'
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: '5px',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



import { dataStore, HomeFeedPostInterface } from "@/constants/data.constant";

import nookies from 'nookies';

const Feed = () => {

  const [userId, setUserId] = useState('');

  useEffect(() => {

    const cookies = nookies.get(null);
    if (cookies.loggedInUser) {
      setUserId(cookies.loggedInUser);
    }
  }, []);

  const loginUser = Number(userId)
  const user = dataStore.users(loginUser)





  const data = dataStore.getHomeFeed(1)

  const [feedData, setFeedData] = useState(data)

  const handleLikeClick = (item: HomeFeedPostInterface) => {
    setFeedData(feedData.map((text: HomeFeedPostInterface) => {
      if (text.id === item.id) {
        text.isLike = !text.isLike;

        if (text.isLike) {
          text.likeCount = text.likeCount + 1
        }
        else {
          text.likeCount = text.likeCount - 1
        }

      }
      return text
    }))
  }



  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 540) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>

      <Layout>
        <Box sx={{ flexGrow: 1, }}>

          <Grid container gap={3} sx={{ margin: '0 5rem' }}>
            <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Item sx={{ padding: 'inherit' }}>
                <Box sx={{ textAlign: '-webkit-center' }}>
                  <Box sx={{ background: '#BFD3D6', borderRadius: '5px', height: '55px' }}>
                  </Box>
                  <Avatar className={style.GridItemAvatar}>{user?.name[0]}</Avatar>
                  <Typography>{user?.name}</Typography>
                  <Typography>{user?.position}</Typography>

                </Box>
                <hr />

                <Button sx={{ textTransform: 'none', display: 'flex', flexDirection: 'column', width: '100%', color: "black", position: 'inherit' }}>
                  <Typography sx={{ color: '#0000003d', }}> connections</Typography>
                  Connect with alumni</Button>

                <hr />
                <Button sx={{ width: '100%', textTransform: 'none', display: 'flex', flexDirection: 'column', position: 'inherit' }}>
                  <Typography sx={{ color: '#0000003d', }}>Accelerate your career</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                    <CheckBoxOutlineBlankIcon sx={{ color: '#F8C77E' }} /> Try Premium for 0</Box>
                </Button>
                <hr />
                <Button sx={{ width: '100%', textTransform: 'none', color: 'black', position: 'inherit' }}>Saved items</Button>

              </Item>
              <Item sx={{ padding: 'inherit' }}>
                <Box className={style.GridItemLink}>
                  <Link href=''>Groups</Link>
                  <Link href=''>Events
                  </Link>
                  <Link href=''>Followed Hashtags</Link>
                </Box>
                <hr />
                <Button sx={{ width: '100%', color: 'black', position: 'inherit' }}>Discover more</Button>
              </Item>
            </Grid>


            <Grid size={5.6} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Item>
                <Box sx={{ textAlign: '-webkit-center' }}>
                  <Avatar className={style.GridItemAvatar2}>{user?.name[0]}</Avatar>
                  <Typography variant='h6'>Hi {user?.name.substring(0, 8)}, are you hiring? </Typography>
                  <Typography variant='body1' sx={{ color: '#00000069' }}>
                    Discover free and easy ways to find a great hire, fast. </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', margin: '15px 10px' }}>
                  <Button variant="outlined" className={style.ItemBtnHiring}
                  >Yes, I am hiring </Button>
                  <Button variant="outlined" className={style.ItemBtnHiring}>
                    No not right now</Button>
                </Box>

              </Item>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {feedData.map((text, index) => (
                  <Item key={index} sx={{ textAlign: 'inherit' }}>
                    <Box sx={{display:'flex', gap:"15px", padding:'15px 0'}}>
                    <Image src='https://img.freepik.com/premium-vector/p-logo-design_877718-2407.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
                   width={50} height={50} alt='' />
                   <Box>
                   <Typography color='black'>{text.user.name}</Typography>
                    <Typography  variant='body2'>{text.user.followerCount} Followers</Typography>

                    <Typography variant='body2' sx={{display:'flex', alignItems:'center',gap:'8px'}}>
                      {moment(text.createdAt).fromNow()}
                       <PublicIcon sx={{width:"20px", height:'20px'}}/></Typography>
                       </Box></Box>

                    <Typography>{text.content} </Typography>
                 
                    <Image src={text.url}
                      alt='' width={500} height={300} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin:'8px 0' }}>
                     
                      <Typography sx={{display:'flex', alignItems:'center', gap:'5px'}}> 
                        <Image src='https://cdn-icons-png.freepik.com/256/12083/12083167.png?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
                        height={20} width={20} alt=''/>
                        {text.likeCount}</Typography>


                      <Box sx={{ display: "flex" }}>
                        <Typography>{text.commentCount}comments.</Typography>
                        <Typography>{text.rePostCount}reposts</Typography></Box>
                    </Box><hr />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '5px 0', }}>

                      <Button onClick={() => handleLikeClick(text)}
                        className={text.isLike ? style.postButtonLiked : style.postButton}>
                        <ThumbUpIcon/>Like</Button>


                      <Button className={style.postButton}>
                        <CommentOutlinedIcon />Comment</Button>
                      <Button className={style.postButton}>
                        <RepeatOutlinedIcon />Repost</Button>
                      <Button className={style.postButton}>
                        <SendOutlinedIcon />Send</Button></Box>
                  </Item>
                ))}
              </Box>

            </Grid>

            <Grid size={3.2} sx={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'static' }}>
              <Item sx={{ textAlign: 'start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '12px' }}>
                  <Typography>LinkedIn News</Typography>
                  <Typography>Top stories</Typography>
                  <Typography>India top 20 startups</Typography>
                  <Typography>SBI plans to hire 10,000 people</Typography>
                  <Typography>What matters to Gen Z</Typography>
                  <Typography>UPI transactions</Typography>
                  <Typography>Real estate</Typography>
                  <Typography>Show more</Typography>
                  <Typography>Today games</Typography>
                  <Typography>Queen</Typography>
                  <Typography>Pinpoint</Typography>
                  <Typography>Crossclimb</Typography>
                </Box>
              </Item>

              <Box sx={{
                position: isFixed ? 'fixed' : 'relative',
                bottom: isFixed ? '40px' : 'auto',
                width: '294px',
              }}>
                <Item sx={{ padding: 'inherit', textAlign: 'start', }}>
                  <Box sx={{ background: '#BFD3D6', width: '100%', height: '60px' }}></Box>
                  <Box sx={{ padding: '10px', }}>
                    <Typography sx={{ color: "black" }}>aramco</Typography>
                    <Typography>preeti, grow your career by following</Typography>
                    <Typography sx={{ color: "black" }}>aramco</Typography>
                    <Typography>visit company page for aramco</Typography></Box>
                  <Button variant='outlined'
                    sx={{ width: '100%', textAlign: 'center', margin: ' 10px 0', position: 'inherit' }}>Follow</Button>
                </Item>
                <footer className={style.feedItemFooter}>
                  <Link href=''>About</Link>
                  <Link href=''>Accessibility</Link>
                  <Link href=''>help Center</Link>
                  <Link href=''>Privacy & Terms</Link>
                  <Link href="">Ad Choices</Link>
                  <Link href="">Advertising </Link>
                  <Link href="">Business Services</Link>
                  <Link href="">Get the LinkedIn app</Link>
                  <Link href="">More</Link>
                  <Typography sx={{ fontSize: "small", color: '#00000078', display: 'flex', alignItems: 'center' }}>
                    Linked <LinkedInIcon sx={{ color: "#0A66C2" }} />
                    LinkedIn Corporation © 2024</Typography>

                </footer>
              </Box>

            </Grid>
          </Grid>
          <Search />
        </Box>
      </Layout>


    </>
  )
}
export default Feed;
