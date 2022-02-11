import React from 'react';
import { ActionTypes } from './ActionTypes';


export const getAllSchool = (school) => {

    return{
         type:ActionTypes.GET_SCHOOLS,
         payload:school
    }
 
};

export const getSchool = (schools) => {
    console.log(schools);
    return{
        type:ActionTypes.INDUIVAL_SCHOOLS,
        payload:schools
    }
}

export const loginAccount = (login) => {
    console.log(login);
    return{
        type:ActionTypes.LOGIN,
        payload:login
    }
}

export const updateSchool = (school) => {
    return{
        type:ActionTypes.UPDATE_SCHOOL,
        payload:school
    }
}

export const deleteSchoolAction = (school) => {
    return{
        type:ActionTypes.DELETE_SCHOOL,
        payload:school
    }
}

export const addSchool = (school) => {
    return{
        type:ActionTypes.ADD_SCHOOL,
        payload:school
    }
}


export const suggestionAction = (suggestion) => {
    return{
        type:ActionTypes.SUGGESTION_LISTING,
        payload:suggestion
    }
}

export const suggestionActionId = (suggestion) => {
    return{
        type:ActionTypes.SUGGESTION_ID,
        payload:suggestion
    }
}

export const addSuggestion = (suggestion) => {
    return{
        type:ActionTypes.ADD_SUGGESTION,
        payload:suggestion
    }
}