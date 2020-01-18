//es5 imports
//const redux = require("redux");
//const utils = require("./utils.js");

//es6 imports
import {MAGIC_NUMBER} from "./utils";
import {createStore} from "redux";
import {listReducer} from "./store/reducer/counter.reducer";
import * as actionTypes from "./store/actions/list.actions";

function updateUI(state){
    console.log("updating list");
    console.log(state);
    $('ul').empty();
    let str ="";
    for(const entry of state.entries){
        str = str + '\<li class=\list-group-item\>' +entry.title + ':' + entry.body + '</li>';
    }
    $("#list").append(str);
    
    //console.log(str);
}

$(document).ready(()=>{
    const store = createStore(listReducer);
    console.log(store.getState());
    //updateUI(store.getState());
    store.subscribe(()=>{
        console.log("inside subscribe");
        console.log(store.getState());
        updateUI(store.getState());
    });

    $("#addButton").click(()=>{
        console.log("add clicked");
       store.dispatch(actionTypes.onAdd($("#title").val(),$("#content").val()));
    });

    $("#deleteBtn").click(()=>{
        console.log("delete clicked");
        store.dispatch(actionTypes.onDelete());
    });
});