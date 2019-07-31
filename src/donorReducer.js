import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState ={
    isLoaded:false,
    list:[{}]
}

export const myActionCreator = (list,status)=>{
    return {
        type:'GET_ALL_DONORS',
        payload:list,
        isLoaded:status
    }
}

export function getListByThunk(){

    return function(dispatch){
        return axios.get("http://localhost:3000/bloodDonors").
        then(resp=>dispatch(myActionCreator(resp.data)));
    }

} 
const donorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DONORS':
            console.log( Object.assign({},action))
            return Object.assign({},action);
       
        default:
            return state
    }
}

let restStore =createStore(donorReducer,applyMiddleware(thunk));

export default restStore;