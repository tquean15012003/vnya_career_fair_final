import { SET_GUEST_SPEAKER_EFFECT, SET_MEDIA_SPONSOR_EFFECT, SET_TOGGLE, SET_TOGGLE_2, SET_TRANSLATE } from "../types/AppEffectTypes";

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

export const setMediaSponsorEffectAction = () => ({
    type: SET_MEDIA_SPONSOR_EFFECT,
    mediaSponsorEffect: {
        opacity: 1,
        translate: "translateY(0)",
    }
})

export const setGuestSpeakerEffectAction = () => ({
    type: SET_GUEST_SPEAKER_EFFECT,
    guestSpeakerEffect: {
        opacity: 1,
        translate: "translateY(0)",
    }
})