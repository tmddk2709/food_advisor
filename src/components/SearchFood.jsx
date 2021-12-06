import React, { useContext, useState } from 'react';
import { Typography, InputBase, Box, Button, MenuItem, FormControl, Select } from '@mui/material';
import { Search } from '@mui/icons-material';
import { InputLabel } from '@material-ui/core';

import { CHANGE_SEARCH_TYPE } from '../context/actionTypes';
import useStyles from './styles';
import { useMyContext } from '../context';
import { getImageAnalysis, getSearch } from '../api/foodAPI';

const SearchFood = () => {
  const classes = useStyles();
  const { state, dispatch } = useMyContext();
  const [searchType, setSearchType] = useState("menuItems");
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <>
      <Box 
        className={classes.bgContainer} 
        style={{ 
          flexDirection: "row",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('./img/homepage_background.jpg')" 
        }}
      >
        {/* <Typography variant="h6" className={classes.title}>
          Explore new places
        </Typography> */}

        <FormControl className={classes.typeControl}>
          <Select 
            className={classes.typeSelect} 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
          >
            <MenuItem value="menuItems">Menu</MenuItem>
            <MenuItem value="products">Product</MenuItem>
            <MenuItem value="recipes">Recipe</MenuItem>
          </Select>
        </FormControl>

        {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase 
              autoFocus="ture"
              placeholder="Search..." 
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => { (e.keyCode === 13) && getSearch(dispatch, searchType, searchValue)}}
            />
          </div>
        {/* </Autocomplete> */}
      </Box>
      
    </>
  )
}

export default SearchFood
