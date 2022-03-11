/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGuestSpeakerAction } from '../../../redux/actions/GuestSpeakerAction'

export default function HomeGuestSpeaker() {

    const { guestSpeakerList } = useSelector(state => state.GuestSpeakerReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setGuestSpeakerAction())
    }, [])

    const renderGuestSpeaker = () => {
        return guestSpeakerList.map((speaker, index) => {
            return (
                ((index + 1) === guestSpeakerList.length) ?
                    <Fragment key={index}>
                        <div className="hidden md:block xl:hidden md:w-1/4 p-4">
                            <div className="rounded-2xl h-full opacity-0 items-center flex justify-center">
                                <img className="rounded-2xl" src={speaker.image} alt={speaker.image} />
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="rounded-2xl h-full items-center flex justify-center">
                                <img className="rounded-2xl" src={speaker.image} alt={speaker.image} />
                            </div>
                        </div>
                    </Fragment>
                    :
                    <div className="xl:w-1/3 md:w-1/2 p-4" key={index}>
                        <div className="rounded-2xl h-full items-center flex justify-center">
                            <img className="rounded-2xl" src={speaker.image} alt={speaker.image} />
                        </div>
                    </div>
            )
        })
    }

    return (
        <div className="my-12">
            <h1 className="text-center text-3xl font-bold">Guest speakers</h1>
            <section className="body-font">
                <div className="container px-5 my-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {renderGuestSpeaker()}
                    </div>
                </div>
            </section >
        </div>
    )
}