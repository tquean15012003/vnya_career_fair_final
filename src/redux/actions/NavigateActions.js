import { SET_NAVIGATE } from "../types/NavigateTypes";

export const navigateAction = (navigate) => ({
    type: SET_NAVIGATE,
    navigate,
})