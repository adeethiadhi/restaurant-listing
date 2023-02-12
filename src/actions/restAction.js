import { R_FAIL, R_SUCCESS} from '../constants/restConstants';
import axios  from "axios";

export const restaurantList=()=> async (dispatch)=>{
    
    try{

   const{data}= await  axios.get('/restaurants.json')
console.log(data)
dispatch({
    type:R_SUCCESS,payload:data.restaurants
})
}
catch(error){
    dispatch({
        type:R_FAIL, error:error
    })

}
}