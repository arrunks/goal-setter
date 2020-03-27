import {GET_ALL_GOAL, ADD_GOAL} from '../actions';

const initialState = [];

export default function (state=initialState, action){
    switch (action.type) {
        case GET_ALL_GOAL : {
            return [...state,...action.payload]
        }
        case ADD_GOAL : {
            return [...state,action.payload]
        }
        default : {
            return state;
        }
    }
}