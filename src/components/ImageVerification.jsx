import React, { useRef } from 'react';
import { Typography, TextField, Box, Button, IconButton, Paper, FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import { Link, MoveUpOutlined, Search } from '@mui/icons-material';

import useStyles from './styles';
import { useMyContext } from '../context/index'
import { CHANGE_IMG_URL } from '../context/actionTypes';
import { getImageAnalysis } from '../api/foodAPI';
import ImageVerificationDetail from './ImageVerificationDetail';

const ImageVerification = () => {
  const classes = useStyles();
  const imgRef = useRef(null);

  const { state, dispatch } = useMyContext();

  return (
    <>
      <Box 
        className={classes.bgContainer} 
        style={{ 
          flexDirection: "column",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('./img/picture_food.jpg')" 
        }}
      >
        <div style={{ width: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <Typography variant="h4" className={classes.title} color="textPrimary">
            Food Image Search
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Classify and analyze a food image
          </Typography>

          <Box display="flex" alignItems="baseline" style={{ width: "100%" }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                Image Url
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                inputRef={imgRef}
                startAdornment={
                  <InputAdornment position="start">
                    <Link/>
                  </InputAdornment>
                }
              />
            </FormControl>
            <IconButton 
              size="large" 
              onClick={() => { 
                getImageAnalysis(dispatch, imgRef.current.value);
                document.getElementById("input-with-icon-adornment").value = "";
              }}
            >
              <Search/>
            </IconButton>
          </Box>
        </div>
      </Box>
      { state.imgAnalysisData && <ImageVerificationDetail /> }
  </>
  )
}

export default ImageVerification
