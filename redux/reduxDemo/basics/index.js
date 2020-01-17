const redux = require("redux");


const initialState = {
    counter:0,
    history:[]
};

const rootReducer = (state=initialState,action)=>{
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter: state.counter + action.data,
            history:[...state.history,action.data]

        };
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            counter: state.counter - action.data,
            history:[...state.history,0-action.data]
        }
    }
    return state;
};

const store = redux.createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch({type:'INCREMENT', data:5});
store.dispatch({type:'DECREMENT', data:3});
store.dispatch({type:'DECREMENT', data:1});
store.dispatch({type:'INCREMENT', data:7});