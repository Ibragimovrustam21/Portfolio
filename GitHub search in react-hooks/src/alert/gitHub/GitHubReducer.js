import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADER } from "../type";

export const GitHubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SET_LOADER:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            break;
    }
}