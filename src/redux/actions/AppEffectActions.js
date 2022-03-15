import { SET_GUEST_SPEAKER_EFFECT, SET_HEADER_EFFECT, SET_MEDIA_SPONSOR_EFFECT } from "../types/AppEffectTypes";

export const setHeaderEffectAction = (toggle, toggle_2, translate) => ({
    type: SET_HEADER_EFFECT,
    headerEffect: {
        toggle,
        toggle_2,
        translate
    }
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