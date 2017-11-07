export default function formStateReducer(state = true, action){
    switch(action.type){
        case 'TOGGLE_FORM_STATE':
            return action.payload
    }
    return state
}