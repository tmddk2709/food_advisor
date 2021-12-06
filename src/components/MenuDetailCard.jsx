import { Card } from '@material-ui/core';
import { ExpandMore, Favorite, HealthAndSafety, HourglassBottom } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';

import useStyles from './styles';

import React from 'react';

const MenuDetailCard = ({ meal, xs }) => {
  const classes = useStyles();

  return (
    <Grid item xs={xs}>
      <Card>
        <CardMedia
          style={{ height: 200, objectFit: "contain" }}
          image={meal.image ? meal.image : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
          title={meal.title}
        />
        <Accordion disableGutters="true">
            <AccordionSummary
              expandIcon={<ExpandMore/>}
            >
              <Typography gutterBottom variant="subtitle1">{meal.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: meal.summary }}></Typography>
            </AccordionDetails>
          </Accordion>
        <CardContent>
          {/* <Typography gutterBottom variant="subtitle1">{meal.title}</Typography> */}
          

          <Box className={classes.mealPlanDetailOutterBox}>
            <Box className={classes.mealPlanDetailInnerBox}>
              <HourglassBottom className={classes.mealPlanDetailIcon} />
              <Typography variant="subtitle2">준비시간</Typography>
            </Box>
            <Typography variant="subtitle2">{meal.readyInMinutes} 분</Typography>
          </Box>

          <Box className={classes.mealPlanDetailOutterBox}>
            <Box className={classes.mealPlanDetailInnerBox}>
              <Favorite className={classes.mealPlanDetailIcon} />
              <Typography variant="subtitle2">좋아요</Typography>
            </Box>
            <Typography variant="subtitle2">{meal.aggregateLikes}</Typography>
          </Box>

          <Box className={classes.mealPlanDetailOutterBox}>
            <Box className={classes.mealPlanDetailInnerBox}>
              <HealthAndSafety className={classes.mealPlanDetailIcon} />
              <Typography variant="subtitle2">건강 점수</Typography>
            </Box>
            <Typography variant="subtitle2">{meal.healthScore}</Typography>
            
          </Box>

          {meal.diets?.map((diet) => (
            <Chip key={diet} size="small" label={diet} className={classes.chip} />
          ))}
        </CardContent>

        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(meal.sourceUrl, '_blank')}>
          자세히
        </Button>
        </CardActions>
      </Card>
    </Grid> 
  )
}

export default MenuDetailCard
