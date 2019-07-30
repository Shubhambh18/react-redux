import reducer from './reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

export const birth ={
    type:'BIRTHDAY',
    message:"Happy Birthday"
}

export const valen ={
    type:'VALENTINE',
    message:"Happy Valentine Day"
}


const store = createStore(reducer,composeWithDevTools());

export default store

