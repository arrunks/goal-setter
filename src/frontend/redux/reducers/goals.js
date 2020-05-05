import {GET_ALL_GOAL, ADD_GOAL, SIGN_OUT, GOAL_UPDATED, GOAL_DELETED} from 'Actions';

const initialState = [];

export default function (state=initialState, action){
    switch (action.type) {
        case GET_ALL_GOAL : {
            return [...state,...action.payload]
        }
        case ADD_GOAL : {
            return [...state,action.payload]
        }
        case SIGN_OUT : {
            return [];
        }
        case GOAL_UPDATED: {
            const {_id} = action.payload;            
            return [...state.filter(goal => goal._id !== _id),{...action.payload}];
        }
        case GOAL_DELETED: {       
            return [...state.filter(goal => goal._id !== action.payload)];
        }
        default : {
            return state;
        }
    }
}