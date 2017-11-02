import {FETCH_WEATHER} from '../actions/index';

export default function weatherReducer(state = [], action){
    switch (action.type){
        case 'FETCH_WEATHER':
            return state.concat(action.payload.data);
        case 'FETCH_WEATHER_RESET':
            return [];    
    }
    return state;
}