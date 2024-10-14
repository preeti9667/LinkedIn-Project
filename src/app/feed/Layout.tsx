// 'use client'
import type { Metadata } from "next";
// import "./globals.css";
import { Box } from "@mui/material";
import Navbar from "./Navbar";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    
    <Box sx={{background:'#F4F2EE',}}>
    <Navbar/>
  <Box sx={{paddingTop:'80px',}}>
    {children}
   </Box>
  </Box>

       
      
    
  );
}
export const metadata: Metadata = {
  title:  'Feed | LinkedIn',
  
 
};