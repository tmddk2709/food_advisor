import React from 'react'
import SearchFood from './SearchFood'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

const Homepage = () => {
  return (
    <>
      <SearchFood/>
      
      <Box 
        className="cardSection" 
        display="flex" 
        justifyContent="space-around" 
        width="800px"
        margin="auto"
      >
        <Card elevation={6} sx={{ width: 300, height: 400 }}>
          <CardActionArea href="/imagesearch">
            <CardMedia
              component="img"
              height="200"
              image="./img/picture_food.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color="textPrimary">
                Food Image Search
              </Typography>
              <Typography gutterBottom variang="body2" color="textSecondary">
                Classify and analyze a food image
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>

        <Card elevation={6} sx={{ width: 305, height: 400 }}>
          <CardActionArea href="/mealplan">
            <CardMedia
              component="img"
              height="200"
              image="./img/meal.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color="textPrimary">
                Generate Meal Plan
              </Typography>
              <Typography gutterBottom variang="body2" color="textSecondary">
                Generate a meal plan with three meals per day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

export default Homepage
