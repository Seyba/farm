const orderReducerDefaultState = [];
const orderReducer = (state = orderReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_ORDER':
            return [
                ...state,
                action.order
            ]
        case 'REMOVE_ORDER':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_ORDER':
            return state.map((order) => {
                if(order.id === action.id){
                    return {
                        ...order,
                        ...action.updates
                    }
                } else {
                    return order;
                }
            });
        default:
            return state;
    }
}
export default orderReducer;