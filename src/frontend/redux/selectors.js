import { createSelector } from 'reselect';
import { formatDate } from 'Utilities';

export const getGoals = state => state.goals;

export const getDerivedGoals = createSelector(
    [getGoals],(goals) => {
        goals.forEach((goal)=> {
            const dueDate = formatDate(goal.dueOn);
            const diffTime = dueDate - new Date();
            goal.dueIn = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            goal.completed = goal.completed || false;
        });
        return goals;
    }
)

export const getInProgressGoals = createSelector(
    [getDerivedGoals],(goals) => goals.filter(goal =>  !goal.completed )
)

export const getAchievedGoals = createSelector(
    [getDerivedGoals],(goals) => goals.filter(goal => goal.completed )
)