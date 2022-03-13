import { combineReducers, createStore } from "redux";
import { NavigateReducer } from './reducers/NavigateReducer'
import { AppEffectReducer } from './reducers/AppEffectReducer'
import { GuestSpeakerReducer } from './reducers/GuestSpeakerReducer'
import { SponsorReducer } from './reducers/SponsorReducer'
import { BackgroundReducer } from './reducers/BackgroundReducer'

const rootReducer = combineReducers({
    NavigateReducer,
    AppEffectReducer,
    GuestSpeakerReducer,
    SponsorReducer,
    BackgroundReducer,
})

export const store = createStore(rootReducer)