import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useMyContext } from '../context';
import Loader from './Loader';
import MenuDetailCard from './MenuDetailCard';
import useStyles from './styles';

const ImageVerificationDetail = () => {

  const { state: { isLoading, imgAnalysisUrl, imgAnalysisData, imgAnalysisDetails }, dispatch } = useMyContext();
  const classes = useStyles();

  // console.log(imgAnalysisUrl)

  if (isLoading) return <Loader/>
  
  return (
    <>
      <Grid container spacing={2} style={{ padding: "10px", maxWidth: "1500px", margin: "auto" }} >
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" color="text.secondary" className={classes.title}>Search Result</Typography>
        </Grid>

        <Grid item xs={12}>
          
          <Box display="flex">
            <img src={imgAnalysisUrl} alt={imgAnalysisData.category.name} style={{ width: "300px"}}/>
            <Box style={{ marginLeft: "20px", width: "100%" }}>
              <Typography gutterBottom variant="h6" color="text.secondary">{imgAnalysisData.category.name.toUpperCase().replace("_", " ")}</Typography>
              <Grid container alignItems="center" style={{ height: "50px" }}>
                <Grid item xs display="flex" justifyContent="space-around">
                  <Typography variant="subtitle2">칼로리</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{imgAnalysisData.nutrition.calories.value} Kcal</Typography>
                </Grid>

                <Divider orientation="vertical" flexItem/>

                <Grid item xs display="flex" justifyContent="space-around">
                  <Typography variant="subtitle2">탄수화물</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{imgAnalysisData.nutrition.carbs.value} g</Typography>
                </Grid>

                <Divider orientation="vertical" flexItem/>

                <Grid item xs display="flex" justifyContent="space-around">
                  <Typography variant="subtitle2">지방</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{imgAnalysisData.nutrition.fat.value} g</Typography>
                </Grid>

                <Divider orientation="vertical" flexItem/>

                <Grid item xs display="flex" justifyContent="space-around">
                  <Typography variant="subtitle2">단백질</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{imgAnalysisData.nutrition.protein.value} g</Typography>
                </Grid>
              </Grid>
            </Box>
            
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" color="text.secondary" className={classes.title}>Available Recipes</Typography>
        </Grid>

        {
          imgAnalysisDetails?.map((meal) => (
            <MenuDetailCard meal={meal} xs={3} />
          ))
        }

      </Grid>
      
    </>
  )
}

export default ImageVerificationDetail;
