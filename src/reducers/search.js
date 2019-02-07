import { actionType } from "../actions/search"; 

const defaultState = {
    searchText: "",
    images: [],
    loading: false,
    imageViewer: {
        open: false,
        imageId: ""
    }
}

export default function searchReducer (state=defaultState, {type, payload}){
    switch (type) {
        case actionType.SET_SEARCH_TEXT:
            return {...state, searchText: payload.searchText}
        
        case actionType.PRE_FETCH_IMAGES:
            return {
                ...state, 
                searchText: payload.searchText,
                loading: true
            }
        
        case actionType.POST_FETCH_IMAGES:
            return {
                ...state, 
                images: payload.images,
                loading: false
            }
            
        case actionType.CLEAR_SEARCH:
            return {
                ...state, 
                images: payload.images,
                loading: payload.loading,
                searchText: payload.searchText,

            }
        
        case actionType.TOGGLE_VIEWER:
            return {
                ...state,
                imageViewer: {
                    open: payload.open,
                    imageId: payload.imageId
                }
            }
        default:
            return state;
    }
}