import React from 'react'
import { useSelector } from 'react-redux'

export default function HomePartner(props) {

    const { mediaSponsorList } = props

    const { navigate } = useSelector(state=>state.NavigateReducer)

    const renderMediaSponsor = () => {
        return mediaSponsorList.map((sponsor, index) => {
            return (
                <div onClick={() => {navigate(`/companydetail/${sponsor.id}`, {replace: true})}} className="h-64 xl:h-52 w-full xl:w-1/4 md:w-1/2 p-5 cursor-pointer rounded-2xl" key={index}>
                    <div className="rounded-2xl bg-white shadow-md hover:scale-120 duration-300 p-7 w-full h-full items-center flex justify-center">
                        <img src={sponsor.image} alt={sponsor.image} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="mt-12">
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