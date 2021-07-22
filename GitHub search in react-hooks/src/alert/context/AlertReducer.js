import { HIDE_ALERT, SHOW_ALERT } from '../type'

export const AlertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload //state mana wunga teng
        case HIDE_ALERT:
            return null //state mana wunga teng

        default:
            return state
    }
}