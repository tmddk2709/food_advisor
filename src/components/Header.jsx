import { FoodBank } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" style={{ color: "white" }}>
              <FoodBank />
            </Link>

          </IconButton>
          {/* <SvgIcon>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon> */}

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            FOOD ADVISOR
          </Typography>

          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
