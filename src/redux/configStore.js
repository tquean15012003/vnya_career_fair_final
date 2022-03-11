import { combineReducers, createStore } from "redux";
import { NavigateReducer } from './reducers/NavigateReducer'
import { HeaderEffectReducer } from './reducers/HeaderEffectReducer'
import { GuestSpeakerReducer } from './reducers/GuestSpeakerReducer'
import { SponsorReducer } from './reducers/SponsorReducer'

const rootReducer = combineReducers({
    NavigateReducer,
    HeaderEffectReducer,
    GuestSpeakerReducer,
    SponsorReducer,
})

export const store = createStore(rootReducer)