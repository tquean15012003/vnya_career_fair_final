/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector } from 'react-redux'

export default function HomeGoldSponsor(props) {

    const { myRefGoldSponsorHome, goldSponsorList } = props

    const { navigate } = useSelector(state => state.NavigateReducer)

    const renderGoldSponsor = () => {
        return goldSponsorList.map((sponsor, index) => {
            return (
                <div onClick={() => { navigate(`/companydetail/${sponsor.id}`, { replace: false }) }} className="h-64 md:h-auto w-full xl:w-1/3 md:w-1/2 p-5 cursor-pointer rounded-2xl" key={index}>
                    <div className="rounded-2xl bg-white shadow-md hover:scale-110 duration-300 p-7 w-full h-full items-center flex justify-center">
                        <img src={sponsor.image} alt={sponsor.image} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div ref={myRefGoldSponsorHome} className="mt-12">
            <h1 className="text-center text-3xl font-bold">Gold sponsors</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 my-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {renderGoldSponsor()}
                    </div>
                </div>
            </section >
        </div >
    )
}