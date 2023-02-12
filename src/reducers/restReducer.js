import { R_FAIL, R_SUCCESS}  from '../constants/restConstants';

export const restaurantListReducer = (state={restaurants:[]},action)=>{

    console.log(action.payload)
    switch(action.type){
        case R_SUCCESS:
            return{restaurants:action.payload}

            case R_FAIL:
                return {restaurants:action.error} 
                
                default:
                    return state
    }

}