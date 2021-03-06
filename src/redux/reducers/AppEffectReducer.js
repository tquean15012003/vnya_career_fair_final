import { SET_BACK_TO_HOME, SET_GUEST_SPEAKER_EFFECT, SET_HEADER_EFFECT, SET_MEDIA_SPONSOR_EFFECT } from "../types/AppEffectTypes"

const stateDefault = {
    headerEffect: {
        toggle: true,
        toggle_2: true,
        translate: "translateY(-100px)",
    },
    mediaSponsorEffect: {
        opacity: 0,
        translate: "translateY(100px)",
    },
    guestSpeakerEffect: {
        opacity: 0,
        translate: "translateY(100px)",
    },
    hideBackToHome: true,

}

export const AppEffectReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_HEADER_EFFECT: {
            return { ...state, headerEffect: action.headerEffect }
        }
        case SET_MEDIA_SPONSOR_EFFECT: {
            return { ...state, mediaSponsorEffect: action.mediaSponsorEffect }
        }
        case SET_GUEST_SPEAKER_EFFECT: {
            return { ...state, guestSpeakerEffect: action.guestSpeakerEffect }
        }
        case SET_BACK_TO_HOME: {
            return { ...state, hideBackToHome: action.hideBackToHome }
        }
        default: {
            return { ...state }
        }
    }
}