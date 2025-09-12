
import React from 'react'
import Image from 'next/image'
import style from '@/app/home/home.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Typography, Link, Button, List, ListItem, } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function HomeMain() {
  return (
    <Box>
      <Container sx={{ marginTop: '4rem' }}>

        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}  >
            <h1 className={style.h1}>Welcome to your <br />professional community</h1>
            <Box className={style.heroBtnFlex}>
              <Link className={style.heroBtnFlexGoo} underline="none"> Google  </Link>
              <Link className={style.heroBtnFlexSign} underline="none">
                Sign in with email </Link>

              <p className={style.heroBtnFlexP}>
                By clicking Continue to join or sign in, you agree to LinkedIn’s
                <Link className={style.heroBtnFlexPLink} underline="none">
                  User <br /> Agreement</Link>,
                <Link className={style.heroBtnFlexPLink} underline="none" >
                  Privacy Policy</Link>,  and
                <Link 
                  className={style.heroBtnFlexPLink}
                  underline="none">
                  Cookie Policy</Link>.</p>
            </Box>
            <p className={style.heroBtnFlexPp}>
              New to LinkedIn?
              <Link className={style.heroBtnFlexPLink} underline="none">join now</Link>
            </p>
          </Grid>
          <Grid item xs={6}>
            <Image src="https://img.freepik.com/free-vector/work-home-concept-flat-design_1308-97857.jpg?ga=GA1.1.2107727690.1726806487"
              width={700} height={500} alt='sa' />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: '#F3F2F0' }}>
        <Container sx={{ marginTop: '4rem', padding: '34px' }}>
          <Grid container rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant='h4'>
                Explore collaborative articles</Typography>
              <Typography variant='h6'>
                We’re unlocking community knowledge in a new<br /> way.
                Experts add insights directly into each<br />
                article, started with the help of AI.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <ol className={style.heroListBtn} >
                <li> <Link className={style.gridBtnList} underline="none">
                  Marketing</Link></li>
                <li> <Link className={style.gridBtnList} underline="none">
                  Public Administration</Link></li>
                <li><Link className={style.gridBtnList} underline="none">
                  Healthcare</Link></li>
                <li><Link className={style.gridBtnList} underline="none">
                  Engineering</Link></li>
                <li><Link className={style.gridBtnList} underline="none">IT Services</Link> </li>
                <li><Link className={style.gridBtnList} underline="none">Sustainability </Link> </li>
                <li><Link className={style.gridBtnList} underline="none">Business Administration</Link> </li>
                <li><Link className={style.gridBtnList} underline="none">Telecommunications</Link> </li>
                <li><Link className={style.gridBtnList} underline="none">HR Management</Link> </li>
                <li><Link className={style.gridListBtn} underline="none">
                  Show all</Link></li>

              </ol>
            </Grid>
          </Grid>
        </Container></Box>
      <Container sx={{ marginTop: '4rem', padding: '34px' }}>
        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant='h4'>Find the right job or<br /> internship for you</Typography>
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', flexDirection: "column", }}>
            <ol className={style.heroListBtn}>
              <li>
                <Link  className={style.gridBtnList} underline="none"> Engineering</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Business Development</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Finance</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Administrative Assistant</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Retail Associate</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Customer Service</Link>
              </li> <li>
                <Link  className={style.gridBtnList} underline="none">Operations</Link>
              </li> <li>
                <Link  className={style.gridBtnList} underline="none">Information Technology</Link>
              </li>
              <li>
                <Link  className={style.gridBtnList} underline="none">Marketing</Link>
              </li> <li>
                <Link  className={style.gridBtnList} underline="none">Human Resources</Link>
              </li>
            </ol>

            <Box>
              <Link  className={style.gridBtnList2} underline="none">
                Engineering < ExpandMoreIcon /></Link></Box>

          </Grid>

        </Grid>

      </Container>
      <Box sx={{ background: "#F1ECE5" }}>
        <Container sx={{ marginTop: '4rem', padding: '34px' }} className={style.fullColorCon}>
          <Typography variant='h4' sx={{ color: '#B24020' }}>
            Post your job for millions of people to see</Typography>
          {/* <Button> */}
          <Link  className={style.gridListBtn} underline="none"
          >Post a job</Link>
          {/* </Button> */}
        </Container> </Box>

      <Container sx={{ marginTop: '4rem', padding: '34px' }}>
        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant='h4'>
              Discover the best software <br />tools
            </Typography>
            <Typography variant='h6'>
              Connect with buyers who have first-hand <br />
              experience to find the best products for you.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ol className={style.heroListBtn} >
              <li> <Link  className={style.gridBtnList} underline="none">
                E-Commerce Platforms</Link></li>
              <li> <Link  className={style.gridBtnList} underline="none">
                CRM Software</Link></li>
              <li><Link  className={style.gridBtnList} underline="none">
                Human Resources Management Systems</Link></li>
              <li><Link  className={style.gridBtnList} underline="none">
                Recruiting Software</Link></li>
              <li><Link  className={style.gridBtnList} underline="none">Sales Intelligence Software</Link> </li>
              <li><Link  className={style.gridBtnList} underline="none">Project Management Software </Link> </li>
              <li><Link  className={style.gridBtnList} underline="none">Help Desk Software</Link> </li>
              <li><Link  className={style.gridBtnList} underline="none">Social NetWorking SoftWare</Link> </li>
              <li><Link  className={style.gridBtnList} underline="none">Desktop Publishing Software</Link> </li>
              <li><Link  className={style.gridListBtn} underline="none">
                Show all</Link></li>

            </ol>
          </Grid>
        </Grid>

        <Container sx={{ marginTop: '4rem', padding: '34px' }}>
          <Grid container rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant='h4'>
                Keep your mind sharp with<br /> games
              </Typography>
              <Typography variant='h6'>
                Take a break and reconnect with your network<br />
                through quick daily games.
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ paddingTop: '68px', margin: 'auto' }}>
              <ol className={style.heroListBtn} >
                <li> <Link  className={style.gridBtnList} underline="none">
                  Pinpoint</Link></li>
                <li> <Link  className={style.gridBtnList} underline="none">
                  Queens</Link></li>
                <li><Link  className={style.gridBtnList} underline="none">
                  Crossclimb</Link></li>


              </ol>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Box sx={{ background: "#F1ECE5" }}>
        <Container sx={{ marginTop: '4rem', padding: '40px 12px' }}>
          <Grid container rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} sx={{ margin: 'auto' }}>
              <Typography variant='h4' sx={{ color: '#B24020' }}>
                Let the right people know you’re open to work
              </Typography>
              <Typography variant='h6'>
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ paddingTop: '60px', paddingLeft: '16rem', textAlign: "center" }}>
              <Image src='https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own'
                alt='image' width={450} height={450} />
            </Grid>
          </Grid>
        </Container></Box>


      <Container sx={{ marginTop: '4rem', padding: '34px' }}>
        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}>
            <Box>
              <Image
                src='https://img.freepik.com/premium-vector/three-people-working-laptops-company-employees-talking-about-boss-tasks-sitting-with-laptop-simple-minimalist-flat-vector-illustration_538213-119598.jpg?ga=GA1.1.2107727690.1726806487'
                alt='hello'
                height={300} width={300} />
              <Typography variant='h4' sx={{ marginBottom: '43px' }}>
                Connect with people who can<br /> help</Typography>
              <Link  className={style.gridBtnList} underline="none" >
                Find people you know</Link>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Image
                src='https://img.freepik.com/premium-vector/freelance-remote-work-concept-woman-sitting-her-workplace-home-working-laptop-female_1002658-4466.jpg?ga=GA1.1.2107727690.1726806487'
                alt='hello'
                height={300} width={300} />
              <Typography variant='h4' >
                Learn the skills you need to<br /> succeed </Typography>

              <Link href='' className={style.chooseATopicBtn} underline="none">
                Choose a topic to learn about
                <ArrowDropDownIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ marginTop: '4rem', padding: '34px' }}>
        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}
            sx={{ marginLeft: '-10px', background: '#F3F2F0', height: '700px', marginTop: '66px' }}>
            <Box sx={{ margin: "160px 0", marginLeft: '38px', }}>
              <Typography variant='h4' sx={{ color: '#B44020' }}> Who is LinkedIn for?</Typography>
              <Typography variant='h6'>Anyone looking to navigate their professional life.</Typography>
              <Box className={style.threeBtnGroup}>

                <Link  className={style.threeBtnGroupBtn} sx={{ color: '#8C59CD' }}
                  underline="none">Find a coworker or  classmate
                  <ArrowForwardIosIcon /></Link>


                <Link  className={style.threeBtnGroupBtn} sx={{ color: '#8C59CD' }}
                  underline="none">Find a new job
                  <ArrowForwardIosIcon /></Link>


                <Link  className={style.threeBtnGroupBtn} sx={{ color: 'black' }}

                  underline="none">Find a course or training
                  <ArrowForwardIosIcon /></Link>


              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Box sx={{ paddingLeft: '9rem' }}>
              <Image src='https://static.licdn.com/aero-v1/sc/h/eghb2zc0p5s2x42wbi80w4v8a'
                alt='' width={800} height={800} /></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ marginTop: '4rem', marginLeft: '14rem', background: '#F4FAFF' }}>
        <Grid container rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ height: '400px', }} >

          <Grid item xs={6} >

          </Grid>
          <Grid item xs={6} sx={{ marginLeft: '17rem' }}>
            <Typography variant='h4'>In it to chase my dream </Typography>
            <Typography variant='h5'>Check out Gayatri’s story of finding a new job on LinkedIn</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '900px', width: '100vw' }} className={style.fullImage}>
        <Box sx={{ marginTop: '99px', padding: '0 98px' }}>

          <Typography variant='h3'>Join your colleagues, classmates, and friends on<br /> LinkedIn.</Typography>
          <Link>
            <Button variant="contained"
              sx={{ textTransform: 'none', borderRadius: '20px', padding: '8px 24px', margin: "15px 0" }}>
              Get Started</Button></Link>
        </Box>
      </Box>


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
                  <Link  className={style.footerListLink}> Sign Up</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}> Help Center</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}> About</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Press</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>
                    Blog</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Careers</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Developers</Link></ListItem></List>
            </Box>

            <Box>
              <Typography variant='h6'>Browse LinkedIn</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Learning</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Jobs</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Games</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Salary</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>
                    Mobile</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Services</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Products</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Top Companies Hub</Link></ListItem></List>
            </Box>

            <Box>
              <Typography variant='h6'>Business Solutions</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Talent</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Marketing</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Sales</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Learning</Link></ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant='h6'>Directories</Typography>
              <List>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Members</Link></ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Jobs</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Companies</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Featured</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>
                    Learning</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Posts</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Articles</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Schools</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>News</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>News Letters</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Services</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Products</Link></ListItem>
                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>Advice</Link>
                </ListItem>

                <ListItem sx={{ padding: '5px 0', }}>
                  <Link  className={style.footerListLink}>People Search</Link></ListItem></List>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  )
}
