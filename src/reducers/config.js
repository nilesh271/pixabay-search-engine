import { actionType } from "../actions/config";

const defaultState = {
    apiKey: "11309786-f670dce88a02edc557091d7cf",
    apiUrl: "https://pixabay.com/api/",
}

export default function configReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case actionType.GET_STATE:
        default:
            return state
    }
}