import * as actionTypes from './actions';

const initialState = {
    records: []
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_HISTORY:
            return{
                ...state,
                records:state.records.concat(action.record)
            
            } 
        case actionTypes.CLEAR_HISTORY:
            return {
                ...state,
                records:[]
            };
        default:
            return state;
    }
};

export default reducer;