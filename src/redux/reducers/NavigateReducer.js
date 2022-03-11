import { SET_NAVIGATE } from "../types/NavigateTypes"

const stateDefault = {
    navigate: {},
}

export const NavigateReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_NAVIGATE: {
            return { ...state, navigate: action.navigate }
        }
        default: {
            return { ...state }
        }
    }
}