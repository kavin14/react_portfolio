export default function glifyReducer(state = [], action){
    switch(action.type){
        case 'SEARCH-TERM':
            return [action.payload.data]
         case 'GLIFY_RESET':
            return []    
    }
    return state;
}