//es5 imports
//const redux = require("redux");
//const utils = require("./utils.js");

//es6 imports
import {MAGIC_NUMBER} from "./utils";
import {createStore} from "redux";
import {counterReducer} from "./store/reducer/counter.reducer";
import * as actionTypes from "./store/actions/counter.action";

function updateUI(state){
    $("#counter").text(state.counter);
}

$(document).ready(()=>{
    const store = createStore(counterReducer);
    console.log(store.getState());
    updateUI(store.getState());
    store.subscribe(()=>{
        console.log("inside subscribe");
        console.log(store.getState());
        updateUI(store.getState());
    });

    $("#increment").click(()=>{
        console.log("inc clicked");
       store.dispatch({type:actionTypes.INCREMENT});
    });

    $("#decrement").click(()=>{
        console.log("dec clicked");
       store.dispatch({type:actionTypes.DECREMENT});
    });
});