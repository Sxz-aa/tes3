'use client'
import './globals.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect } from 'react';
import Logo from '@/components/Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
  return (
    <html lang="en">
      <body>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{  height: '102px',justifyContent: 'center',backgroundColor: '#212121'}}>
          <Toolbar>
            {/* <Typography className="top-0 left-0"> */}
                <Logo />

            {/* </Typography> */}
          </Toolbar>
        </AppBar>
      </Box>
        {children}
      </body>
    </html>
  );
}
