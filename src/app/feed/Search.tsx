'use client'
import React,{useState} from 'react'

import style from '@/app/feed/feed.module.css'
import { Avatar, Box, Button, IconButton, InputBase,  Typography, Tab, Tabs, Paper,} from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { dataStore } from '@/constants/data.constant';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        // id={`simple-tabpanel-${index}`}
        // aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }


export default function Search() {

    const [openSearch, setOpenSearch] = useState(true)

    const [searchList, setSearchList] = useState('')

  const handleClick =()=>{
    setOpenSearch(!openSearch)
  }
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const users = dataStore.userList('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchList.toLowerCase())
      );
   

    //  const users = dataStore.userList;
//   console.log("User list", users);



  // }
  return (

    <div>
      <Paper sx={{width:'300px' , position:'fixed', bottom:'-3px',right:'30px',
   height: openSearch ? '430px':'50px', padding:'inherit'
}}>
  <Box sx={{display:'flex',alignItems:'center',  justifyContent:'space-between', padding:'10px'}}>
  <Box sx={{display:'flex',alignItems:'center',gap:'2px'}}>
<Avatar sx={{background:'#004E41', width:'30px', height:'30px',}}>P</Avatar>
<Typography sx={{color:'black'}}>Messaging</Typography>
</Box>
<Box sx={{display:'flex',gap:'6px'}}>
  <Button className={style.searchTopBtn}>
    <MoreHorizIcon/>
    </Button>
  <Button className={style.searchTopBtn}>
    <EditNoteIcon/>
  </Button>
  <Button className={style.searchTopBtn}  onClick={handleClick}>
              {openSearch? <ExpandMoreIcon/> : <ExpandLessIcon/>}
  </Button>

</Box></Box>
<hr/>
<Paper className={style.searchMinSearch}>
  <Typography >
  <SearchIcon sx={{marginBottom:'-7px'}}/>
  </Typography>
  <InputBase
   sx={{ ml: 1, flex: 1 }}
   onChange={(e)=>setSearchList( e.target.value)}
   value={searchList}
   placeholder="Search messaging"
   inputProps={{ 'aria-label': 'search google maps' }}/>
<IconButton sx={{'&:hover':{background:'none'}}}>
  <MenuIcon/>
</IconButton>
</Paper>

<Box sx={{ width: '100%', typography: 'body1', marginTop:"25px",}}>
      
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs onChange={handleChange}  value={value}>
           <Tab label="Focused" value={0}  
           sx={  {'&:hover':{background:'#0000000d'},
            textTransform:'none',minHeight:'38px',minWidth:'150px'} }/>
            <Tab label="Other" value={1} 
            sx={{'&:hover':{background:'#0000000d'},textTransform:'none',minHeight:'38px',minWidth:'150px'}}/>
           
          </Tabs>
        </Box>

    </Box>
          <CustomTabPanel value={value} index={0}>
        
            {filteredUsers.map((test, index)=>(
                <Box key={index}>
                    <Box sx={{display:'flex', alignItems:'center', gap:"15px", padding:'5px 0'}} >
                        <Avatar sx={{background:'#004E41',width:'30px',height:'30px'}}>
                            {test.name[0]}</Avatar>
                        <Typography> { test.name}</Typography>
                    </Box>
                
                   
                </Box>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
        sssss
          </CustomTabPanel>
       

</Paper>

    </div>
  )
}
