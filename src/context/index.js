import { createContext, useReducer, useContext } from 'react';
import { SET_LOADING, GET_IMG_ANALYSIS_SUCCESS, GET_MEAL_PLAN_SUCCESS, GET_SEARCH_SUCESS, SET_SUCCESS, GET_MEAL_PLAN_DETAILS_SUCCESS, GET_IMG_ANALYSIS_DETAILS_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,

  // search
  searchType: "menuItems",
  searchData: null,

  // img verification
  imgAnalysisUrl: null,
  imgAnalysisData: null,
  imgAnalysisDetails: [],

  // general meal plan
  mealPlanData: null,
  mealPlanDetails: [],
}

const Context = createContext({});

const reducer = (state = initialState, action) => {

  switch (action.type) {

    // set loading
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case SET_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    // search
    case GET_SEARCH_SUCESS:
      return {
        ...state,
        isLoading: false,
        searchType: action.searchType,
        searchData: action.searchData,
      }

    // image verification
    case GET_IMG_ANALYSIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        imgAnalysisUrl: action.imgAnalysisUrl,
        imgAnalysisData: action.imgAnalysisData,
        imgAnalysisDetails: [],
      }

    case GET_IMG_ANALYSIS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        imgAnalysisDetails: action.detailInfoList,
      }

    // general meal plan
    case GET_MEAL_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mealPlanData: action.mealPlanData,
        mealPlanDetails: [],
      }

    case GET_MEAL_PLAN_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mealPlanDetails: action.detailInfoList,
      }

    default:
      return state;

  }
};

export const useMyContext = () => {
  const { state, dispatch } = useContext(Context);
  if (!state || !dispatch) {
    throw new Error("Cannot find Provider");
  }

  return { state, dispatch };
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

