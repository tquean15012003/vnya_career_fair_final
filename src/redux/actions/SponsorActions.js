import { SET_SPONSOR } from "../types/SponsorTypes"

const sponsorList = [
    { id: 1, image: "./assets/img/vnya_logo_shopee.png", goldSponsor: true},
    { id: 2, image: "./assets/img/vnya_logo_pandg.png", goldSponsor: true},
    { id: 3, image: "./assets/img/vnya_logo_intel.png", goldSponsor: true},
    { id: 4, image: "./assets/img/vnya_logo_sim.png", goldSponsor: true},
    { id: 5, image: "./assets/img/vnya_logo_vng.png", goldSponsor: true},
    { id: 6, image: "./assets/img/vnya_logo_vnairline.png", goldSponsor: true},
    { id: 7, image: "./assets/img/vnya_logo_loreal.png", goldSponsor: false},
    { id: 8, image: "./assets/img/vnya_logo_smart.png", goldSponsor: false},
    { id: 9, image: "./assets/img/vnya_logo_aiesec.png", goldSponsor: false},
    { id: 10, image: "./assets/img/vnya_logo_fmt.png", goldSponsor: false},

]

export const setSponsorAction = () => ({
    type: SET_SPONSOR,
    sponsorList,
})