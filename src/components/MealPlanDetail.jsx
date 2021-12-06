import { ExpandMore, Favorite, HealthAndSafety, HourglassBottom } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Paper, Typography } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react';
import { useMyContext } from '../context';
import Loader from './Loader';
import MenuDetailCard from './MenuDetailCard';
import useStyles from './styles';

const MealPlanDetail = () => {

  const { state, dispatch } = useMyContext();
  const classes = useStyles();

  if (state.isLoading) return <div/>

  return (
    <>
      <Grid container spacing={2} style={{ padding: "10px", maxWidth: "1500px", margin: "auto" }}>
        <Grid container alignItems="center" style={{ height: "50px" }}>
          <Grid item xs display="flex" justifyContent="space-around">
            <Typography variant="subtitle2">칼로리</Typography>
            <Typography variant="subtitle2" color="text.secondary">{state.mealPlanData.nutrients.calories} Kcal</Typography>
          </Grid>

          <Divider orientation="vertical" flexItem/>

          <Grid item xs display="flex" justifyContent="space-around">
            <Typography variant="subtitle2">탄수화물</Typography>
            <Typography variant="subtitle2" color="text.secondary">{state.mealPlanData.nutrients.carbohydrates} g</Typography>
          </Grid>

          <Divider orientation="vertical" flexItem/>

          <Grid item xs display="flex" justifyContent="space-around">
            <Typography variant="subtitle2">지방</Typography>
            <Typography variant="subtitle2" color="text.secondary">{state.mealPlanData.nutrients.fat} g</Typography>
          </Grid>

          <Divider orientation="vertical" flexItem/>

          <Grid item xs display="flex" justifyContent="space-around">
            <Typography variant="subtitle2">단백질</Typography>
            <Typography variant="subtitle2" color="text.secondary">{state.mealPlanData.nutrients.protein} g</Typography>
          </Grid>
        </Grid>
        

        {
          state.mealPlanDetails.map((meal) => (
            <MenuDetailCard meal={meal} xs={4} />
          ))
        }
      </Grid>
    </>
  )
}

export default MealPlanDetail;
