import { SET_BACKGROUND } from "../types/BackgroundTypes"

const backgroundList = [
    { id: 1, image: "./assets/img/vnya_background.png" },
    { id: 2, image: "./assets/img/vnya_about.png" },
    { id: 3, image: "./assets/img/vnya_timeline_12th.png" },
    { id: 4, image: "./assets/img/vnya_timeline_13th.png" },
]

export const setBackgroundAction = () => ({
    type: SET_BACKGROUND,
    backgroundList,
})