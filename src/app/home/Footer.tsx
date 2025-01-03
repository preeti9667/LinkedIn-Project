import { Box, Container, Link, List, ListItem } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '@/app/home/home.module.css'
const Footer = () => {
  return (
    <footer>
      <Box sx={{ fontSize: '11px' }}>
        <Container >

          <List sx={{ display: 'flex' }}>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}>
              Linked
              <LinkedInIcon />
            </ListItem  >
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px', marginLeft: '-23px' }}>© 2024</ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}>
              <Link href='' className={style.footerListLink}>About </Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px', marginLeft: '-40px' }}>
              <Link href='' className={style.footerListLink}>Accessibility</Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>User Agreement </Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>Privacy Policy</Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>Cookie Policy</Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>Copyright Policy</Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>
              Brand Policy</Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>Guest Controls
            </Link></ListItem>
            <ListItem sx={{ padding: '5px 0', marginRight: '-34px' }}><Link href='' className={style.footerListLink}>Community Guidelines</Link></ListItem>
            <ListItem><Link href='' className={style.footerListLink} sx={{ display: 'flex', alignItems: 'center', paddingLeft: '5px' }}>
              Language<ExpandMoreIcon />
            </Link></ListItem>
          </List>
        </Container>
      </Box>
  
    </footer>
  )
}

export default Footer
