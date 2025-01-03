import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, List, ListItem, Link, } from '@mui/material';
import styled from '@/app/home/home.module.css'
import style from '@/app/login/logIn.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div>
      <footer className={style.formFooter}>
        <Typography sx={{ display: 'flex' }}>Linked
          <LinkedInIcon /></Typography>
        <Typography>© 2024</Typography>
        <List sx={{ display: 'flex', fontSize: "x-small", width: '60vw' }}>
          <ListItem
            sx={{ padding: '5px 0', marginRight: '-34px', marginLeft: '9px' }}
          ><Link href='' className={styled.footerListLink}>User Agreement </Link></ListItem>
          <ListItem
            sx={{ padding: '5px 0', marginRight: '-34px' }}
          ><Link href='' className={styled.footerListLink}>Privacy Policy</Link></ListItem>
          <ListItem
            sx={{ padding: '5px 0', marginRight: '-34px' }}
          ><Link href='' className={styled.footerListLink}>Cookie Policy</Link></ListItem>
          <ListItem
            sx={{ padding: '5px 0', marginRight: '-34px' }}
          ><Link href='' className={styled.footerListLink}>Copyright Policy</Link></ListItem>


          <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}>
            <Link href='' className={styled.footerListLink}>Send Feedback
            </Link></ListItem>
          <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}>
            <Link href='' className={styled.footerListLink}>Community Guidelines</Link></ListItem>
          <ListItem><Link href='' className={styled.footerListLink}
            sx={{ display: 'flex', alignItems: 'center', paddingLeft: '5px' }}>
            Language<ExpandMoreIcon />
          </Link></ListItem>
        </List>
      </footer>
    </div>
  )
}

export default Footer
