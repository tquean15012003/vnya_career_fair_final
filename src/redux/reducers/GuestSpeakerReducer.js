import { SET_GUEST_SPEAKER } from "../types/GuestSpeakerTypes"

const stateDefault = {
    guestSpeakerList: [{ id: 1, image: "./assets/img/vnya_speaker_mai.png"}],
}

export const GuestSpeakerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_GUEST_SPEAKER: {
            return { ...state, guestSpeakerList: action.guestSpeakerList }
        }
        default: {
            return { ...state }
        }
    }
}