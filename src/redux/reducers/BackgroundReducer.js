import { SET_BACKGROUND } from "../types/BackgroundTypes"

const stateDefault = {
    backgroundList: [{ id: 1, image: "./assets/img/vnya_background.png" }],
}

export const BackgroundReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_BACKGROUND: {
            return { ...state, backgroundList: action.backgroundList }
        }
        default: {
            return { ...state }
        }
    }
}