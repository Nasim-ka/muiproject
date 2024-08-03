import styled from '@emotion/styled';
import {Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar } from "@mui/material"
import {Typography } from '@mui/material';
import { useState } from 'react';
const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})
const Search = styled("div")(({theme})=>({
  background:"white",
  padding:"0 10px",
  borderRadius:"10px",
  width:"40%"
}));
const Icons = styled(Box)(({theme})=>({
  display:"none",
   gap:"10px",
   alignItems:"center",
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
   }
}))
const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
       <StyledToolbar>
       <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>nasim</Typography>
       <Pets sx={{display:{xs:"block", sm:"none"}}}/>
       <Search><InputBase placeholder='Search ...'/></Search>
       <Icons><Badge badgeContent={6} color="error">
       <Mail/>
      </Badge>
      <Badge badgeContent={8} color="error">
      <Notifications /></Badge>
       <Avatar alt="Remy Sharp" sx={{width:30, height:30}} src="../../../public/images/RemySharp.jpg"
       onClick={(e)=>setOpen(true)}
       />
      </Icons>
      <UserBox onClick={(e)=>setOpen(true)}>
      <Avatar alt="Remy Sharp" sx={{width:30, height:30}} src="../../../public/images/RemySharp.jpg" />
      <Typography variant='span'>john</Typography>
      </UserBox>
       </StyledToolbar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
  )
}

export default Navbar