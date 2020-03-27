import { combineReducers } from 'redux';

import user  from './user';
import goals  from './goals';

const goalSetter = combineReducers({
    user,
    goals
});

export default goalSetter;