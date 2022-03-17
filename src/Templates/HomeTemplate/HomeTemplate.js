import React, { useRef } from 'react'
import BackToHome from '../../Components/BackToHome/BackToHome';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';

export default function HomeTemplate(props) {

    const { Component } = props;

    const myRefHeaderHomeTemplate = useRef(null)
    const myRefGoldSponsorHome = useRef(null)

    const executeScrollHeaderHomeTemplate = () => myRefHeaderHomeTemplate.current.scrollIntoView()
    const executeScrollGoldSponsorHome = () => myRefGoldSponsorHome.current.scrollIntoView()

    return (
        <>
            <HomeHeader myRefHeaderHomeTemplate={myRefHeaderHomeTemplate} executeScrollHeaderHomeTemplate={executeScrollHeaderHomeTemplate} executeScrollGoldSponsorHome={executeScrollGoldSponsorHome} />
            <Component myRefGoldSponsorHome={myRefGoldSponsorHome} />
            <HomeFooter />
            <BackToHome />
        </>
    )
}