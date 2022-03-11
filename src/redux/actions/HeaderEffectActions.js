import { SET_TOGGLE, SET_TOGGLE_2, SET_TRANSLATE } from "../types/HeaderEffectTypes";


export const setToggleAction = (toggle) => ({
    type: SET_TOGGLE,
    toggle,
})

export const setToggle2Action = (toggle_2) => ({
    type: SET_TOGGLE_2,
    toggle_2,
})

export const setTranslateAction = (translate) => ({
    type: SET_TRANSLATE,
    translate,
})