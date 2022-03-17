/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMediaSponsorEffectAction } from '../../../redux/actions/AppEffectActions'

export default function HomePartner(props) {

    const { mediaSponsorList } = props

    const { navigate } = useSelector(state => state.NavigateReducer)

    const { mediaSponsorEffect } = useSelector(state => state.AppEffectReducer)

    const dispatch = useDispatch()

    const mediaSponsorRef = useRef(null)

    const renderMediaSponsor = () => {
        return mediaSponsorList.map((sponsor, index) => {
            return (
                <div onClick={() => { navigate(`/companydetail/${sponsor.id}`, { replace: false }) }} className="h-64 xl:h-52 w-full xl:w-1/4 md:w-1/2 p-5 cursor-pointer rounded-2xl" key={index}>
                    <div className="rounded-2xl bg-white shadow-md hover:scale-120 duration-300 p-7 w-full h-full items-center flex justify-center">
                        <img src={sponsor.image} alt={sponsor.image} />
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        // load only when scroll to the component
        let height = 0;
        const handleEffect = setInterval(() => {
            height = mediaSponsorRef.current.getBoundingClientRect().top;
            clearInterval(handleEffect)
        }, 200)
        window.addEventListener("scroll", () => {
            const position = window.pageYOffset
            if (position > height - 600) {
                dispatch(setMediaSponsorEffectAction())
            }
        })
    }, [])

    return (
        <div ref={mediaSponsorRef} className="mt-12 duration-2000" style={{ opacity: `${mediaSponsorEffect.opacity}`, transform: `${mediaSponsorEffect.translate}` }}>
            <h1 className="text-center text-3xl font-bold">Media sponsors</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 my-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {renderMediaSponsor()}
                    </div>
                </div>
            </section >
        </div >
    )
}