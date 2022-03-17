import React from 'react'
import { useSelector } from 'react-redux'

export default function BackToHome() {

    const { hideBackToHome } = useSelector(state => state.AppEffectReducer)

    const { navigate } = useSelector(state => state.NavigateReducer)

    return (
        <div className={`${hideBackToHome ? "hidden" : ""} fixed z-10 min-w-min bottom-4 right-4`}>
            <div onClick={() => {
                navigate('/', { replace: false })
            }} className="flex justify-center items-center w-10 h-10 text-lg p-3 md:w-16 md:h-16 md:text-2xl cursor-pointer text-orange-400 md:p-4 border border-orange-400 rounded-full"><i className="fa fa-home"></i></div>
        </div>
    )
}