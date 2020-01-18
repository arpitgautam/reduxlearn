export const ADD = "ADD";
export const DELETE = "DELETE";


//action creators
export const onAdd = (title,body)=>{
    return{
        type:ADD,
        payload:{
            title,
            body
        }
    }
}

export const onDelete = ()=>{
    return{
        type:DELETE
    }
}