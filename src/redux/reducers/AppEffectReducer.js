import { SET_GUEST_SPEAKER_EFFECT, SET_MEDIA_SPONSOR_EFFECT, SET_TOGGLE, SET_TOGGLE_2, SET_TRANSLATE } from "../types/AppEffectTypes"

const stateDefault = {
    toggle: true,
    toggle_2: true,
    translate: "translateY(-100px)",
    mediaSponsorEffect: {
        opacity: 0,
        translate: "translateY(100px)",
    },
    guestSpeakerEffect: {
        opacity: 0,
        translate: "translateY(100px)",
    },

}

export const AppEffectReducer = (state = stateDefault, action) => {
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
        case SET_MEDIA_SPONSOR_EFFECT: {
            return { ...state, mediaSponsorEffect: action.mediaSponsorEffect }
        }
        case SET_GUEST_SPEAKER_EFFECT: {
            return { ...state, guestSpeakerEffect: action.guestSpeakerEffect }
        }
        default: {
            return { ...state }
        }
    }
}