import { Box, Container, Link, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '@/app/style/home.module.css'
const Footer = () => {
  return (
    <footer>
      <Box sx={{ background: '#F3F2F0', }}>
        <Container className={style.footerContainer}>
          <Box sx={{ display: 'flex', color: 'blue', alignItems: "center" }}>
            <Typography variant='h5'>Linked</Typography>
            <LinkedInIcon />
          </Box>
          <Box sx={{ display: 'flex', gap: '112px' }}>
            <Box>
              <Typography variant='h6'>General</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }} >
                  <Link href='' className={style.footerListLink}> Sign Up</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}> Help Center</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}> About</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Press</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>
                    Blog</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Careers</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Developers</Link></ListItem></List>
            </Box>

            <Box>
              <Typography variant='h6'>Browse LinkedIn</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Learning</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Jobs</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Games</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Salary</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>
                    Mobile</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Services</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Products</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Top Companies Hub</Link></ListItem></List>
            </Box>

            <Box>
              <Typography variant='h6'>Business Solutions</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Talent</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Marketing</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Sales</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Learning</Link></ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant='h6'>Directories</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Members</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Jobs</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Companies</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Featured</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>
                    Learning</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Posts</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Articles</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Schools</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>News</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>News Letters</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Services</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Products</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>Advice</Link>
                  </ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link href='' className={style.footerListLink}>People Search</Link></ListItem></List>
            </Box>

          </Box>
        </Container>
        <Box sx={{ background: 'white',fontSize:'11px' }}>
          <Container >
            
            <List sx={{display:'flex'}}>
              <ListItem sx={{padding:'5px 0', marginRight:'-34px'  }}>
              Linked
              <LinkedInIcon />
              </ListItem  >
              <ListItem sx={{padding:'5px 0',marginRight:'-34px',marginLeft:'-23px' }}>© 2024</ListItem>
              <ListItem sx={{ padding:'5px 0', marginRight:'-34px'  }}>
                <Link href='' className={style.footerListLink}>About </Link></ListItem>
              <ListItem sx={{padding:'5px 0', marginRight:'-34px',marginLeft:'-40px'}}>
                <Link href=''className={style.footerListLink}>Accessibility</Link></ListItem>
              <ListItem sx={{ padding:'5px 0', marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>User Agreement </Link></ListItem>
              <ListItem sx={{ padding:'5px 0',marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>Privacy Policy</Link></ListItem>
              <ListItem sx={{ padding:'5px 0',marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>Cookie Policy</Link></ListItem>
              <ListItem sx={{ padding:'5px 0',marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>Copyright Policy</Link></ListItem>
              <ListItem sx={{padding:'5px 0', marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>
                Brand Policy</Link></ListItem>
              <ListItem sx={{padding:'5px 0', marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>Guest Controls
              </Link></ListItem>
              <ListItem sx={{padding:'5px 0', marginRight:'-34px'  }}><Link href=''className={style.footerListLink}>Community Guidelines</Link></ListItem>
              <ListItem><Link href=''className={style.footerListLink} sx={{display:'flex',alignItems:'center',paddingLeft:'5px'}}>
              Language<ExpandMoreIcon />
              </Link></ListItem>
            </List>
          </Container>
        </Box>
      </Box>

    </footer>
  )
}

export default Footer
