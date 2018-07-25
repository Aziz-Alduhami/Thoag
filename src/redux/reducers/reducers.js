import {combineReducers} from 'redux'
import {CHANGE_LANGUAGE} from '../actions/actions'


const languageReducer = (state={}, action) => {
    // console.log('my state');
    // console.log(state);
    // console.log('my action:')
    // console.log(action)

    if (action.type === CHANGE_LANGUAGE){
        return action.isRTL;
    }
    return state
}
const rootReducer = combineReducers({
    isRTL: languageReducer,
})
  
export default rootReducer