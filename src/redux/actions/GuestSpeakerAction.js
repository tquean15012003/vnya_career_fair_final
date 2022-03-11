import { SET_GUEST_SPEAKER } from "../types/GuestSpeakerTypes"

const guestSpeakerList = [
    { id: 1, image: "./assets/img/vnya_speaker_mai.png"},
    { id: 2, image: "./assets/img/vnya_speaker_vulan.png"},
    { id: 3, image: "./assets/img/vnya_speaker_vuong.png"},
    { id: 4, image: "./assets/img/vnya_speaker_duong.png"},
    { id: 5, image: "./assets/img/vnya_speaker_linh.png"},
    { id: 6, image: "./assets/img/vnya_speaker_phong.png"},
    { id: 7, image: "./assets/img/vnya_speaker_hannah.png"},
    { id: 8, image: "./assets/img/vnya_speaker_minh.png"},
    { id: 9, image: "./assets/img/vnya_speaker_nhi.png"},
]

export const setGuestSpeakerAction = () => ({
    type: SET_GUEST_SPEAKER,
    guestSpeakerList,
})