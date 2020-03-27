import {SIGN_IN,SIGN_OUT} from '../actions';

const initialState = {
        name:'',
        _id:'',
        loaded:false
}

export default function (state = initialState, action){
    switch (action.type) {
        case SIGN_IN : {
            const { name, _id} = action.payload;
            return {
                ...state,
                name , _id, loaded:true
            }
        }
        case SIGN_OUT : {
            return {
                ...state,
                name:'',
                _id:'',
                loaded:false
            }
        }
        default: {
            return state;
        }
    }
}