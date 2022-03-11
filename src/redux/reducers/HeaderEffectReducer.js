import { SET_TOGGLE, SET_TOGGLE_2, SET_TRANSLATE } from "../types/HeaderEffectTypes"

const stateDefault = {
    toggle: true,
    toggle_2: true,
    translate: "translateY(-100px)",
}

export const HeaderEffectReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_TOGGLE: {
            return { ...state, toggle: action.toggle }
        }
        case SET_TOGGLE_2: {
            return { ...state, toggle_2: action.toggle_2 }
        }
        case SET_TRANSLATE: {
            return { ...state, translate: action.translate }
        }
        default: {
            return { ...state }
        }
    }
}