import React, { useState } from 'react';
import { Typography, Box, Button, FormControl, Select, InputLabel, MenuItem, OutlinedInput, Chip, Stack, Slider } from '@mui/material';

import useStyles from './styles';
import { ContentPasteGoOutlined, Fastfood, NoFood } from '@mui/icons-material';
import TagsInput from './TagInput';
import { useMyContext } from '../context/index';
import { getMealPlan } from '../api/foodAPI'
import MealPlanDetail from './MealPlanDetail';

const dietMenuList = ["vegan", "vegetarian", "pescetarian", "gluten free", "grain free", "dairy free", "high protein", "low sodium", "low carb", "Paleo", "Primal", "ketogenic", "FODMAP", "Whole 30"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const GenerateMealPlan = () => {
  const classes = useStyles();
  const { state, dispatch } = useMyContext();

  const [timeFrame, setTimeFrame] = useState("day");
  const [targetCalories, setTargetCalories] = useState(2000);
  const [dietList, setDietList] = useState([]);
  const [excludeList, setExcludeList] = useState([]);

  return (
    <>
      <Box 
        className={classes.bgContainer} 
        style={{ 
          flexDirection: "column",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('./img/meal.jpg')" 
        }}
      >
        <div style={{ width: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <Typography variant="h4" className={classes.title} color="textPrimary">
            Generate Meal Plan
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Generate a meal plan with three meals per day
          </Typography>

          {/* timeFrame */}
          <Box width="100%" display="flex" justifyContent="space-between" marginBottom="10px">
            
            <FormControl className={classes.timeFrameControl}>
              <InputLabel>Time Frame</InputLabel>
              <Select 
                label="Time Frame"
                className={classes.timeFrameSelect} 
                value={timeFrame} 
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <MenuItem value="day">Day</MenuItem>
                <MenuItem value="week">Week</MenuItem>
              </Select>
            </FormControl>

            <Stack spacing={2} direction="row" justifyContent="space-around" alignItems="center">
            {/* <Stack> */}
              <InputLabel>Calorie</InputLabel>
              <NoFood />
              <Slider 
                style={{ width: "150px" }}
                aria-label="Target Calories"
                value={targetCalories} 
                valueLabelDisplay="auto"
                min={500}
                max={4000}
                onChange={(e) => setTargetCalories(e.target.value)} 
              />
              <Fastfood />
            </Stack>
          </Box>

          {/* diet */}
          <Box display="flex" alignItems="baseline" style={{ width: "100%", marginBottom: "10px" }}>
            <FormControl className={classes.dietControl}>
              <InputLabel>diet</InputLabel>
              <Select 
                id="demo-multiple-chip"
                className={classes.dietSelect} 
                multiple
                value={dietList} 
                onChange={(e) => {
                  const { target: { value } } = e;
                  setDietList(value)
                }}
                input={<OutlinedInput label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {dietMenuList.map((diet, i) => (
                  <MenuItem key={i} value={diet}>{diet}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* exclude */}
          {/* // ? TODO : chip이 많아지면 창 넘어가는 문제 */}
          <Box display="flex" alignItems="baseline" style={{ width: "100%", marginBottom: "20px" }}>
            <TagsInput
              fullWidth
              selectedTags={(items) => setExcludeList(items)}
              variant="outlined"
              id="tags"
              label="Exclude"
            />
          </Box>

          <Button 
            variant="outlined"
            // variant="contained"
            style={{ margin: "none" }}
            // size="large"
            endIcon={<ContentPasteGoOutlined />}
            onClick={(e) => getMealPlan(dispatch, timeFrame, targetCalories, dietList, excludeList)}
          >
            SUBMIT
          </Button>
        </div>
      </Box>
      {
        state.mealPlanData && <MealPlanDetail />
      }
      
  </>
  )
}

export default GenerateMealPlan
