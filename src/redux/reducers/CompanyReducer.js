import { GET_COMPANY_DETAIL } from "../types/CompanyTypes"

const stateDefault = {
    companyDetail: {}
}

export const CompanyReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_COMPANY_DETAIL: {
            return { ...state, companyDetail: action.companyDetail }
        }
        default: {
            return { ...state }
        }
    }
}