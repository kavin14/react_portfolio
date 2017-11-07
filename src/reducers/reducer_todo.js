export default function toDoReducer (state = [], action){
    switch(action.type){
        case "ADD_TO_DO":
            return state.concat(action.payload)
        case "MOVE_TO_DO":
            let currentState = state
            let length = state.length-1;
            if(action.payload[0] == 0 & action.payload[1] == "+" || action.payload[0] == length & action.payload[1] == "-"){
                console.log("edge condition")
                return currentState
            }else{
                var tmp;
                if(action.payload[1] == "+"){
                    
                    tmp = currentState[action.payload[0]]
                    currentState[action.payload[0]] = currentState[action.payload[0]-1]
                    currentState[action.payload[0]-1] = tmp
                }else{
                    tmp = currentState[action.payload[0]]
                    currentState[action.payload[0]] = currentState[action.payload[0]+1]
                    currentState[action.payload[0]+1] = tmp
                }
                console.log(currentState)
                return Object.assign([],currentState)
            }

    }
    return state
}