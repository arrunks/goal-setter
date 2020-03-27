import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';
export const UPDATE_GOAL = 'UPDATE_GOAL';
export const GET_ALL_GOAL = 'GET_ALL_GOAL';

export function signIn(user) {
    return { type:SIGN_IN, payload:user}
}

export function signOut(user) {
    return { type:SIGN_OUT}
}

export function addGoal(goal) {
    return { type:ADD_GOAL, payload: goal}
}

export function listGoals(goals) {
    return { type:GET_ALL_GOAL, payload: goals}
}

export const doSignIn = (email,password) => {
    return (dispatch) =>{
        return axios.post('http://localhost:5000/api/v1/login',{
            email,password
        },{headers: {"Content-Type":"application/json"}}).then(function(response){
            if (response.status === 200){
                dispatch(signIn(response.data.result));
                localStorage.setItem('user',response.data.token);
            }
        });
    }
}

export const doSignOut = (name,password) => {
    return (dispatch) =>{
        dispatch(signOut());
        localStorage.setItem('user','');
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
}

export const getUserInfo = () => {
    return (dispatch) => {
        return axios.get('http://localhost:5000/api/v1/user',{
            headers: {"Authorization":`Bearer ${localStorage.getItem('user')}`}
        }).then((response) => {
            dispatch(signIn(response.data));
        })
    }
}

export const createGoal = (title,description,authorId,dueOn) => {
    return (dispatch) => {
        return axios.post('http://localhost:5000/api/v1/goals',{
            title,
            description,
            dueOn,
            authorId
        },
        {headers: {"Authorization":`Bearer ${localStorage.getItem('user')}`}}
        ).then((response) => {
            dispatch(addGoal(response.data.result));
        })
    }
}

export const getAllGoals = () => {
    return (dispatch,getState) => {
        return axios.get(`http://localhost:5000/api/v1/goals?authorid=${getState().user._id}`,
        {
            headers: {"Authorization":`Bearer ${localStorage.getItem('user')}`}
        }).then((response) => {
            dispatch(listGoals(response.data));
        })
    }
}