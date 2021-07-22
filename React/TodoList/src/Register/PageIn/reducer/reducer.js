import { ADD_VALUE, ADD_VALUE_MODAL, AUTH_LOGOUT, AUTH_SUCCESS, CHANGE_USER, CLICK_CHANGE, DIV_CLOSE, DIV_CLOSE_MODULE_ADD, DIV_NAME, EDIT_VALUE_MODAL, INPUT_HOLAT, MODAL_ADD_ACTION, MODAL_ADD_ACTION_CHANGE, } from "../actionType/actionType"

const initialState = {
    inputVal: [],
    click: false,
    inputHolat: false,
    token: null,
    div_Name: null,
    keyValue: null,
    modalAdd: false,
    valueModal: [],
    change: true,
    modalKey: null,
    divKey: null
}

export function addReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }
        case ADD_VALUE:
            if (action.value.length !== 0) {
                state.inputVal.push(action.value)
            }
            return {
                ...state,
                inputVal: [...state.inputVal]
            }
        case CLICK_CHANGE:
            return {
                ...state,
                click: !state.click
            }
        case INPUT_HOLAT:
            return {
                ...state,
                inputHolat: !state.inputHolat,
                keyValue: action.key
            }
        case DIV_NAME:
            state.div_Name = state.inputVal[action.key]
            state.divKey = action.key
            return {
                ...state,
            }
        case DIV_CLOSE:
            state.inputVal.splice(action.key, 1)
            state.inputVal = [...state.inputVal]
            return {
                ...state,
            }
        case CHANGE_USER:
            if (action.changeUser.length !== 0) {
                state.inputVal.splice(action.key, 1, action.changeUser)
            }
            state.inputVal = [...state.inputVal]
            return {
                ...state
            }

        case MODAL_ADD_ACTION:
            return {
                ...state,
                modalAdd: !state.modalAdd,
                change: true
            }
        case ADD_VALUE_MODAL:
            if (action.valueName.length !== 0 && action.valueDescription.length !== 0) {
                state.valueModal.push(
                    { valueName: action.valueName, valueDescription: action.valueDescription, id: state.divKey }
                )
            }

            return {
                ...state,
                valueModal: [...state.valueModal]
            }
        case DIV_CLOSE_MODULE_ADD:
            state.valueModal.splice(action.key, 1)
            state.valueModal = [...state.valueModal]
            return {
                ...state,
            }
        case MODAL_ADD_ACTION_CHANGE:
            return {
                ...state,
                modalAdd: !state.modalAdd,
                modalKey: action.key,
                change: false
            }
        case EDIT_VALUE_MODAL:
            state.valueModal.map((name, id) => {
                if (id == state.modalKey && (action.valueName.length !== 0 && action.valueDescription.length !== 0)) {
                    return (
                        name.valueName = action.valueName,
                        name.valueDescription = action.valueDescription
                    )
                }
            })
            state.valueModal = [...state.valueModal]
            return {
                ...state,
            }

        default:
            return state
    }
}