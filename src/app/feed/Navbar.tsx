'use client'
import {
  AppBar, Box, Link, Toolbar, InputBase, IconButton, Paper
  , Avatar, Button,
  Typography,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem
} from '@mui/material'
import React, { useState, useEffect } from 'react'
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

import { dataStore } from "@/constants/data.constant";
import nookies from 'nookies';


const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [OpenBusiness, setOpenBusiness] = useState(false)


  const router = useRouter()



  const handleClick = () => {
    setOpen(!open)
  }



  const handleClickBusiness = () => {
    setOpenBusiness(!OpenBusiness);
  };



  const handleSignOut = () => {

    Cookies.destroy(null, 'loggedInUser')
    localStorage.removeItem('loggedInUser')
    router.push('/login')
  }

  const [userId, setUserId] = useState('');


  useEffect(() => {

    const cookies = nookies.get(null);
    if (cookies.loggedInUser) {
      setUserId(cookies.loggedInUser);
    }
  }, []);

  const loginUser = Number(userId);
  const user = dataStore.users(loginUser);


  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };


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
            <li >

              <BottomNavigation value={value}
                onChange={(event, newValue) => handleChange(newValue)}
                sx={{ width: '441px' }} showLabels >
                <BottomNavigationAction icon={<HomeIcon />} label='Home' value='/feed' disableRipple
                  className={style.feedNavTabsTab}
                  sx={{
                    '&.Mui-selected': {
                      color: '#605d5f80'
                    },
                  }} />

                <BottomNavigationAction icon={<PeopleIcon />}
                  disableRipple label='My Network' value='/connections'
                  className={style.feedNavTabsTab}
                  sx={{
                    '&.Mui-selected': {
                      color: '#605d5f80',
                      minWidth: 'fit-content'
                    },
                    '&.Mui-bottomNavigationAction-label': {
                      minWidth: 'fit-content'
                    },
                  }}
                />
                <BottomNavigationAction icon={<BusinessCenterIcon />}
                  disableRipple label='Job' value='/job'
                  sx={{
                    '&.Mui-selected': {
                      color: '#605d5f80'
                    },
                  }}
                  className={style.feedNavTabsTab} />
                <BottomNavigationAction icon={<SmsIcon />}
                  sx={{
                    '&.Mui-selected': {
                      color: '#605d5f80'
                    },
                  }}
                  disableRipple label='Messaging' value='/messaging'
                  className={style.feedNavTabsTab} />
                <BottomNavigationAction icon={<NotificationsIcon />}
                  sx={{
                    '&.Mui-selected': {
                      color: '#605d5f80'
                    },
                  }}
                  disableRipple label='Notifications' value='/'
                  className={style.feedNavTabsTab} />

              </BottomNavigation>
            </li>

            <li className={style.navLiSelect1}>
              <Avatar className={style.avatar}> P</Avatar>
              <Button endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px', }} />}
                className={style.nabLiBtn} onClick={handleClick}
                sx={{ textTransform: 'none', margin: '-3px', '&:hover': { background: 'inherit', boxShadow: 'none' } }}>
                Me
              </Button>

            </li>

            {open && (<Paper className={style.navMenu}>
              <Box sx={{ width: '280px', height: '400px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px', padding: ' 10px' }}>
                  <Avatar sx={{ width: '55px', height: '55px', background: '#004E41', }}>
                    {user?.name[0]}</Avatar>
                  <Box> <Typography >{user?.name}</Typography>
                    <Typography sx={{ color: '#00000042' }}>{user?.position}</Typography></Box>
                </Box>
                <Button className={style.nabMenuViewButton}>
                  View Profile</Button>
                <hr />
                <Box className={style.navMenuLinkBox}>
                  <Typography>Account</Typography>
                  <Link href='' className={style.navMenuLink}>Settings & privacy</Link>
                  <Link href="" className={style.navMenuLink}>Help</Link>
                  <Link href='' className={style.navMenuLink}>Language</Link>
                </Box>
                <hr />
                <Box className={style.navMenuLinkBox}>
                  <Typography>Manage</Typography>
                  <Link href='' className={style.navMenuLink}>Posts & Activity</Link>
                  <Link href='' className={style.navMenuLink}>job Posts Account</Link>
                </Box> <hr />
                <Button onClick={handleSignOut}
                  sx={{ '&:hover': { background: 'none', textDecoration: 'underline', } }}
                  className={style.navMenuSignOut}>Sign Out</Button></Box>
            </Paper>)}


            <Divider orientation="vertical" flexItem />

            <li className={style.navLiSelect1}>
              <AppsIcon sx={{ color: 'black' }} />
              <Button

                endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px', }} />}
                onClick={handleClickBusiness}
                sx={{
                  textTransform: "none", margin: '-3px',
                  '&:hover': { background: 'inherit', boxShadow: 'none' }
                }} className={style.nabLiBtn}
              >For Business</Button>

              {OpenBusiness && (<Paper className={style.navMenu2}>
                <Box>
                  <Typography variant='h6'>Visit More LinkedIn Products</Typography>
                  <List>
                    <ListItem className={style.listItem}>
                      <Link href='' className={style.listItemLink}> Find Leads</Link>
                      <Link href='' className={style.listItemLink}>Groups</Link>

                    </ListItem>
                    <ListItem className={style.listItem} sx={{ color: 'rgba(0, 0, 0, 0.301)' }}> Talent
                      <Link href='' className={style.listItemLink} >Talent Insights</Link>
                      <Link href='' className={style.listItemLink}>Talent Insights</Link>
                      <Link href='' className={style.listItemLink}>Post a job</Link>


                    </ListItem>
                    <ListItem className={style.listItem} sx={{ color: 'rgba(0, 0, 0, 0.301)' }}> Sales
                      <Link href='' className={style.listItemLink}>Services Marketplace</Link>
                      <Link href='' className={style.listItemLink}>Marketing</Link>
                      <Link href='' className={style.listItemLink}>Advertise</Link>
                    </ListItem >
                    <ListItem className={style.listItem} sx={{ color: 'rgba(0, 0, 0, 0.301)' }}>Learning
                      <Link href='' className={style.listItemLink}>Learning</Link>

                    </ListItem>
                  </List>


                </Box>
                <Box>
                  <Typography variant='h6'>Explore more for business</Typography>
                  <List>
                    <ListItem className={style.listItem}  >

                      Hire on LinkedIn
                      <Link href='' className={style.listItemLinkRight} >
                        Find, attract and recruit talent

                      </Link>
                    </ListItem>
                    <ListItem className={style.listItem}>Sell with LinkedIn
                      <Link href='' className={style.listItemLinkRight} >
                        Unlock sales opportunities</Link>
                    </ListItem>
                    <ListItem className={style.listItem} >Post a job for free
                      <Link href='' className={style.listItemLinkRight}>
                        Get qualified applicants quickly</Link>
                    </ListItem>
                    <ListItem className={style.listItem}>Advertise on LinkedIn
                      <Link href='' className={style.listItemLinkRight} >
                        Acquire customers and grow your business</Link>
                    </ListItem>
                    <ListItem className={style.listItem}>Learn with LinkedIn
                      <Link href='' className={style.listItemLinkRight} >
                        Courses to develop your employees</Link>
                    </ListItem>
                  </List>
                </Box>
              </Paper>)}

            </li>
            <li >
              <Link underline='none'
                className={style.navLiSelect1} >
                <CheckBoxOutlineBlankIcon sx={{ color: '#F1C37E' }} />
                <Button className={style.nabLiBtn}
                  sx={{
                    textTransform: "none", margin: '-3px',
                    '&:hover': { background: 'inherit', boxShadow: 'none' }
                  }}>
                  Try Premium for ₹0 </Button>
              </Link></li>
          </ol>
        </Toolbar>
      </AppBar>
    </Box>


  )
}

export default Navbar
