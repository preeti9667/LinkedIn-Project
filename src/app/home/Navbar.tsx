
import {  Icon,Button } from '@mui/material'

import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ExtensionIcon from '@mui/icons-material/Extension';
import Link from 'next/link';
import style from '@/app/home/home.module.css'
const Navbar = () => {
  return (
    <nav>
        <div className={style.nb}>
            <div >
                <Link href='/' className={style.nbLink}>
               <span> Linked</span>
               <LinkedInIcon/>
               </Link>

            </div>
            < ol className={style.nbList}>
            <li className={style.nbListLink}>
                <Link href='/'>
                <Icon>< ArticleIcon /></Icon>
                <span>Articles</span>
                </Link>
            </li>

            <li className={style.nbListLink}>
                <Link href=''>
                <Icon>< PeopleIcon/></Icon>
                <span>People</span>
                </Link>
            </li>
            <li className={style.nbListLink}>
                <Link href=''>
                <Icon><SlideshowIcon/></Icon>
                <span>Learning</span>
                </Link>
            </li>
            <li className={style.nbListLink}>
                <Link href=''>
                <Icon>< BusinessCenterIcon /></Icon>
                <span>Jobs</span>
                </Link>
            </li>
            <li className={style.nbListLink}>
                <Link href=''>
                <Icon><ExtensionIcon /></Icon>
                <span>Games</span>
                </Link>
            </li>
            <li>
                <Link href='' className={style.nbListLinkG}>
                <Icon>< LaptopMacIcon/></Icon>
                <span>Get the app</span>
                </Link>
            </li>

            </ol>
            <div className={style.nbBtn}>
                <Button sx={{textTransform: 'none'}} className={style.nbBtnJo}>Join now</Button>
               <Link href='../login'> <Button variant='outlined'sx={{textTransform: 'none'}}
                 className={style.nbBtnSi}>Sign in</Button></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar




