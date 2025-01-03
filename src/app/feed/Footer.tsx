'use client'
import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Link, Paper, } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from '@/app/feed/feed.module.css'

export default function Footer() {
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
    <div>
      <Box sx={{
        position: isFixed ? 'fixed' : 'relative',
        bottom: isFixed ? '40px' : 'auto',
        width: '294px',
      }}>
        <Paper sx={{ padding: 'inherit', textAlign: 'start', }}>
          <Box sx={{ background: '#BFD3D6', width: '100%', height: '60px' }}></Box>
          <Box sx={{ padding: '10px', }}>
            <Typography sx={{ color: "black" }}>aramco</Typography>
            <Typography>preeti, grow your career by following</Typography>
            <Typography sx={{ color: "black" }}>aramco</Typography>
            <Typography>visit company page for aramco</Typography></Box>
          <Button variant='outlined'
            sx={{ width: '100%', textAlign: 'center', margin: ' 10px 0', position: 'relative' }}>Follow</Button>
        </Paper>
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
    </div>
  )
}
