import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_GOAL = 'ADD_GOAL';
export const GOAL_DELETED = 'GOAL_DELETED';
export const UPDATE_GOAL = 'UPDATE_GOAL';
export const GET_ALL_GOAL = 'GET_ALL_GOAL';
export const GOAL_UPDATED = 'GOAL_UPDATED';

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

export function goalUpdated(goal){
    return { type:GOAL_UPDATED, payload: goal }
};

export function goalDeleted(_id){
    return { type:GOAL_DELETED, payload: _id}
}

export const doSignIn = (email,password) => {
    return async (dispatch) =>{
        const response = await axios.post('http://localhost:5000/api/v1/login', {
            email, password
        }, { headers: { "Content-Type": "application/json" } });
        if (response.status === 200) {
            dispatch(signIn(response.data.result));
            localStorage.setItem('user', response.data.token);
        }
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
    return async (dispatch) => {
        const response = await axios.get('http://localhost:5000/api/v1/user', {
            headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` }
        });
        dispatch(signIn(response.data));
    }
}

export const createGoal = (title,description,authorId,dueOn) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:5000/api/v1/goals', {
            title,
            description,
            dueOn,
            authorId
        }, { headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` } });
        dispatch(addGoal(response.data.result));
    }
}

export const getAllGoals = () => {
    return async (dispatch,getState) => {
        const response = await axios.get(`http://localhost:5000/api/v1/goals?authorid=${getState().user._id}`, {
            headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` }
        });
        dispatch(listGoals(response.data));
    }
}

export const updateGoal = (_id,title,description,authorId,dueOn,completed) => {
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:5000/api/v1/goals`, {
            _id,
            title,
            description,
            dueOn,
            authorId,
            completed
        }, { headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` } });
        dispatch(goalUpdated({ ...response.data }));
    }
}

export const deleteGoal = (_id ) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:5000/api/v1/goals`, {
            data: { _id },
            headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` }
        });
        dispatch(goalDeleted(_id));
    }
}