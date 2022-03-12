import { combineReducers, createStore } from "redux";
import { NavigateReducer } from './reducers/NavigateReducer'
import { HeaderEffectReducer } from './reducers/HeaderEffectReducer'
import { GuestSpeakerReducer } from './reducers/GuestSpeakerReducer'
import { SponsorReducer } from './reducers/SponsorReducer'
import { BackgroundReducer } from './reducers/BackgroundReducer'

const rootReducer = combineReducers({
    NavigateReducer,
    HeaderEffectReducer,
    GuestSpeakerReducer,
    SponsorReducer,
    BackgroundReducer,
})

export const store = createStore(rootReducer)