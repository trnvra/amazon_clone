export const initialState = {
    basket:[],
    // by default the user is null when we do use effect in app.jsx
    user:null
};
//  reducer---How we able to dispatch this action  (add to basket) into data layer

    //Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);



const reducer = (state,action) => {
    console.log(action);
   switch (action.type){
     case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        };

        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: []
          }
          // case 'EMPTY_BASKET':
          //   return {
          //     ...state,
          //     basket: []
          //   }

        case "REMOVE_FROM_BASKET":
           const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
           );   
           let newBasket = [...state.basket];
           
           if(index>=0){
             newBasket.splice(index, 1);
           }else{
            console.warn(
            `cant remove product (id: ${action.id}) as its not in basket!`
           )
           }
           return {
            ...state,
            basket: newBasket
           }
          //  use in case of authetication of user urals no need to write
          case "SET_USER":
            return{
              ...state,
              // update the user
              user: action.user 
            }
            
        default:
            return state;
   }
};

export default reducer;