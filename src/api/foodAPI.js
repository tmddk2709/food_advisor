import axios from 'axios';
import { GET_IMG_ANALYSIS_SUCCESS, GET_IMG_ANALYSIS_DETAILS_SUCCESS, GET_MEAL_PLAN_SUCCESS, GET_MEAL_PLAN_DETAILS_SUCCESS, SET_LOADING, SET_SUCCESS } from '../context/actionTypes';


const baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
const foodApiHeaders = {
  'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
};

export const getImageAnalysis = async (dispatch, imageUrl) => {

  dispatch({ type: SET_LOADING });
  // dispatch({ type: CHANGE_IMG_URL, imgUrl: imageUrl });

  axios.request({
    method: 'GET',
    url: baseUrl + '/food/images/analyze',
    params: {
      imageUrl: imageUrl,
    },
    headers: foodApiHeaders
  }).then((response) => {
    console.log(response.data);
    dispatch({ type: GET_IMG_ANALYSIS_SUCCESS, imgAnalysisUrl: imageUrl, imgAnalysisData: response.data })

    const mealIds = [];
    response.data.recipes.forEach(recipe => {
      mealIds.push(recipe.id);
    })
    getRecipeInfoBulks(dispatch, mealIds, GET_IMG_ANALYSIS_DETAILS_SUCCESS);
  }).catch((error) => {
    console.error(error);
  });
}

export const getAutoComplete = async (dispatch) => {


}

export const getSearch = async (dispatch, searchType, searchValue) => {
  console.log("get Search ::: ", searchType, searchValue);

  dispatch({ type: SET_LOADING });


}

export const getMealPlan = async (dispatch, timeFrame, targetCalories, dietList, excludeList) => {

  dispatch({ type: SET_LOADING });

  axios.request({
    method: 'GET',
    url: baseUrl + '/recipes/mealplans/generate',
    params: {
      timeFrame: timeFrame,
      targetCalories: targetCalories,
      diet: dietList.join(","),
      exclude: excludeList.join(",")
    },
    headers: foodApiHeaders
  }).then((response) => {
    console.log(response.data);
    dispatch({ type: GET_MEAL_PLAN_SUCCESS, mealPlanData: response.data })

    const mealIds = [];
    response.data.meals.forEach(meal => {
      mealIds.push(meal.id);
    })
    getRecipeInfoBulks(dispatch, mealIds, GET_MEAL_PLAN_DETAILS_SUCCESS);

  }).catch((error) => {
    console.log(error);
  })


}

export const getRecipeInfo = async (dispatch, id) => {

  dispatch({ type: SET_LOADING });

}

export const getRecipeInfoBulks = async (dispatch, ids, actionType) => {

  dispatch({ type: SET_LOADING });
  const paramIds = ids.join(",");

  axios.request({
    method: 'GET',
    url: baseUrl + '/recipes/informationBulk',
    params: { ids: paramIds },
    headers: foodApiHeaders
  }).then((response) => {
    console.log(response.data);
    dispatch({ type: actionType, detailInfoList: response.data })
  }).catch((error) => {
    console.log(error);
  })


}