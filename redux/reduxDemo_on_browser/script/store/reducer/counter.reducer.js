import * as actionTypes from "../actions/counter.action"

const initialState = {
    "counter":0
};

export const counterReducer = (state = initialState, action)=>{
    console.log(action);
    switch(action.type)
    {
        case actionTypes.INCREMENT:{
            return{
                ...state,
                counter: state.counter + 1
            }
        }
        case actionTypes.DECREMENT:{
            return{
                ...state,
                counter: state.counter -1
            }
        }
        default: return state;

    }
}