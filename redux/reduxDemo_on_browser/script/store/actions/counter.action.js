export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUB_COUNTER";

//action creators
export const onAddCounter = (payload)=>{
    return{
        type:ADD_COUNTER,
        payload
    }
}