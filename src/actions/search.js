import axios from "axios";
import { getConfig } from './config'

export const actionType = {
    SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
    FETCH_IMAGES: "FETCH_IMAGES",
    PRE_FETCH_IMAGES: "PRE_FETCH_IMAGES",
    POST_FETCH_IMAGES: "POST_FETCH_IMAGES",
    CLEAR_SEARCH: "CLEAR_SEARCH",
    TOGGLE_VIEWER: "TOGGLE_VIEWER"
}

export const setSearchState = searchText => {
    return {
        type: actionType.SET_SEARCH_TEXT,
        payload:{ searchText }
    }
}

export const fetchImages = searchText => {
    return (dispatch, getState) => {
        if(!searchText){
            dispatch(clearSearch())
        }
        else{
            dispatch(preFetchImages(searchText))
            dispatch(getConfig())
            const {config} = getState()
            return axios.get(`${config.apiUrl}?key=${config.apiKey}&q=${searchText}`)
            .then(({data}) => {
                dispatch(postFetchImages(data.hits.map((hit) => {
                    return {
                        id: hit.id,
                        imageUrl: hit.webformatURL,
                        largeImageURL: hit.largeImageURL,
                        user: hit.user,
                        tags: hit.tags
                    }
                })))
            })
            .catch((err) => {
                console.log('Error while fetching images: ', err)
                dispatch(postFetchImages([]))
            })
        }
    }
}

export const preFetchImages = searchText => {
    return {
        type: actionType.PRE_FETCH_IMAGES,
        payload:{ 
            searchText
        }
    }
}

export const postFetchImages = (images=[]) => {
    return {
        type: actionType.POST_FETCH_IMAGES,
        payload:{ 
            images
        }
    }
}

export const clearSearch = () => {
    return {
        type: actionType.CLEAR_SEARCH,
        payload:{ 
            images:[],
            searchText: "",
            loading: false
        }
    }
}

export const toggleImageViewer = (open, imageId) => {
    return {
        type: actionType.TOGGLE_VIEWER,
        payload:{ 
            open: open || false,
            imageId: imageId || ""
        }
    }
}