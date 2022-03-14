/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCompanyDetailAction } from '../../redux/actions/CompanyAction'

export default function CompanyDetail() {

    const { id } = useParams()

    const { navigate } = useSelector(state => state.NavigateReducer)

    // If company does not have detail, prevent click
    if (id === "6" || id === "10") {
        navigate("/", { replace: false })
    }

    const { companyDetail } = useSelector(state => state.CompanyReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompanyDetailAction(id))
    }, [])

    // render videos if is gold sponsor
    const renderVideo = () => {
        return (
            companyDetail.videoURL !== '' ? <div className="flex justify-center items-center">
                <iframe className="w-5/6 sm:w-3/4 sm:h-96 md:h-128 lg:h-160 mt-5" src={companyDetail?.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> : ''
        )
    }

    // render company information
    const renderInfo = () => {
        return companyDetail?.companyInfo?.map((item, index) => {
            return (
                <Fragment key={index}>
                    <p>{item}</p>
                    <br />
                </Fragment>
            )
        })
    }

    // render company's social media
    const renderCompanySocial = () => {
        return companyDetail?.companySocial?.map((item, index) => {
            return (
                <a className="mr-3 text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer" href={item.site} key={index}><i style={{ fontSize: "25px" }} className={item.icon}></i></a>
            )
        })
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mt-5 xl:mt-10">{companyDetail?.companyName}</h1>
            {renderVideo()}
            <div className="mt-5">
                {renderInfo()}
            </div>
            <div className="flex justify-start items-center mt-5">
                <p className="mr-2">Tìm hiểu thêm về {companyDetail?.companyName} tại:</p>
                <div className="flex justify-center items-center">
                    {renderCompanySocial()}
                </div>
            </div>
        </div>
    )
}
