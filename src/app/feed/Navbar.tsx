'use client'
import {
  AppBar, Box, Link, Tab, Tabs, Toolbar, InputBase, IconButton, Paper
  , Avatar, Button, Menu,
} from '@mui/material'
import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import style from '@/app/feed/feed.module.css'

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Cookies from 'nookies'
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false)
  const [OpenBusiness, setOpenBusiness] = useState(false)
  const router = useRouter()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
    setOpenBusiness(false)
  }
  const handleClickBusniess = () => {
    setOpenBusiness(!OpenBusiness)
  }
  const handleSignOut = () => {

    Cookies.destroy(null, 'loggedInUser')
    localStorage.removeItem('loggedInUser')
    router.push('/login')
  }

  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: '0' }}>
      <AppBar sx={{ color: 'none', height: '59px', background: 'white', }}>
        <Toolbar>
          <LinkedInIcon sx={{ color: '#0A66C2', height: '44px', width: '44px' }} />


          <Paper className={style.searchMinSearch}>

            <IconButton sx={{ '&:hover': { background: 'none' } }}>
              <SearchIcon />

            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }} />
          </Paper>


          <ol className={style.feedNavLi}>
            <li>
              <Tabs value={value} onChange={handleChange} textColor="secondary"
                indicatorColor="secondary"
                sx={{ height: '69px', marginTop: "-12px" }}>
                <Tab icon={<HomeIcon />} label='Home'
                  className={style.feedNavTabsTab} />
                <Tab icon={<PeopleIcon />} label='My Network'
                  className={style.feedNavTabsTab}
                />
                <Tab icon={<BusinessCenterIcon />} label='Job'
                  className={style.feedNavTabsTab} />
                <Tab icon={<SmsIcon />} label='Messaging'
                  className={style.feedNavTabsTab} />
                <Tab icon={<NotificationsIcon />} label='Notifications'
                  className={style.feedNavTabsTab} />
              </Tabs>
            </li>

            <li className={style.navLiSelect1}>
              <Avatar className={style.avatar}> P</Avatar>
              <Button endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px', }} />}
                className={style.nabLiBtn} onClick={handleClick}
                sx={{ textTransform: 'none', margin: '-3px', '&:hover': { background: 'inherit', boxShadow: 'none' } }}>
                Me
              </Button>

            </li>
            <Menu open={open} onClose={handleClose}
              sx={{ left: 'inherit', right: '18rem', top: '-4rem', position: 'absolute', width: '300px', }} >
              <Box sx={{ width: '300px', height: '400px' }}>
                <Button onClick={handleSignOut}>Sign Out</Button></Box>
            </Menu>


            <Box sx={{ border: "1px solid #00000030", height: '55px', }}></Box>

            <li className={style.navLiSelect1}>
              <AppsIcon sx={{ color: 'black' }} />
              <Button endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px', }} />} onClick={handleClickBusniess}
                sx={{
                  textTransform: "none", margin: '-3px',
                  '&:hover': { background: 'inherit', boxShadow: 'none' }
                }}
                className={style.nabLiBtn}
              >For Business</Button>
            </li>


            <Menu open={OpenBusiness} onClose={handleClose}
              sx={{ left: 'inherit', right: '12rem', top: '-5rem', position: 'absolute', width: '700px', height: '482px' }} >
              <Box sx={{ display: 'flex', gap: '3px', width: '700px', height: '482px', overflow: 'auto' }}>
                <Box sx={{ border: "1px solid black" }}>hello</Box>
                <Box sx={{ border: "1px solid black" }}>hello1</Box>
              </Box>

            </Menu>

            <li >
              <Link underline='none' href=''
                className={style.navLiSelect1}
              >
                <CheckBoxOutlineBlankIcon sx={{ color: '#F1C37E' }} />
                <Button className={style.nabLiBtn}
                  sx={{ textTransform: "none", margin: '-3px', '&:hover': { background: 'inherit', boxShadow: 'none' } }}>
                  Try Premium for ₹0 </Button>
              </Link></li>
          </ol>
        </Toolbar>
      </AppBar>
    </Box>


  )
}

export default Navbar
