import { AccountBox, Article, Diversity3, GroupAdd, Home, ModeNight, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2}
    sx={{ display:{
        xs:"none", sm:"block"} }}
    >
      <Box position={'fixed'}>
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
               <Home/> 
              </ListItemIcon>
              <ListItemText primary="home page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
               <Article/> 
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Group">
              <ListItemIcon>
               <GroupAdd/> 
              </ListItemIcon>
              <ListItemText primary="Group page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#market place">
              <ListItemIcon>
               <Storefront/> 
              </ListItemIcon>
              <ListItemText primary="market place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
               <Diversity3/> 
              </ListItemIcon>
              <ListItemText primary="friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
               <Settings/> 
              </ListItemIcon>
              <ListItemText primary="Settings page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
               <AccountBox/> 
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
               <ModeNight/> 
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}

export default Sidebar