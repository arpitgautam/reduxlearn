import * as actionTypes from "../actions/list.actions"

const initialState = {
    entries:[]
   
};

export const listReducer = (state = initialState, action)=>{
    console.log("inside reducer");
    console.log(action);
    console.log(state);
    switch(action.type)
    {
        case actionTypes.ADD:{
            console.log(action);
            return{
                ...state,
                entries: [...state.entries,action.payload]
            }
        }
        case actionTypes.DELETE:{
            const newpayload = [...state.entries];
            newpayload.pop();
            return{
                ...state,
                entries:newpayload
            }
        }
        default: return state;

    }
}