export const actionType = {
    GET_STATE: "GET_STATE"
}

export const getConfig = () => {
    return {
        type: actionType.GET_STATE,
        payload: {}
    }
}