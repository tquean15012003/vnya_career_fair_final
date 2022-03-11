import { SET_SPONSOR } from "../types/SponsorTypes"

const stateDefault = {
    sponsorList: [
        { id: 1, image: "./assets/img/vnya_logo_shopee.png", goldSponsor: true },
        { id: 7, image: "./assets/img/vnya_logo_loreal.png", goldSponsor: false },
    ],
}

export const SponsorReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_SPONSOR: {
            return { ...state, sponsorList: action.sponsorList }
        }
        default: {
            return { ...state }
        }
    }
}