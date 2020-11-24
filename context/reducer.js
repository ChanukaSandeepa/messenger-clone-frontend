export const CHANGE_HEADER = "ADD_TOKEN"

export const initialState = {
    header: false,
    headerTitle : 'Chats'
}

export default (state, action) => {
    switch (action.type) {
        case CHANGE_HEADER:
            const { status, title } = action.payload
            return {
                ...state,
                header: status,
                headerTitle : title
            }
        default:
            return state
    }
}