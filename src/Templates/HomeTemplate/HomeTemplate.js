import React, { useRef } from 'react'
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';

export default function HomeTemplate(props) {

    const { Component } = props;

    const myRefHeaderHomeTemplate = useRef(null)
    const myRefGoldSponsorHome = useRef(null)
    const myRefFooterHomeTemplate = useRef(null)

    const executeScrollHeaderHomeTemplate = () => myRefHeaderHomeTemplate.current.scrollIntoView()
    const executeScrollGoldSponsorHome = () => myRefGoldSponsorHome.current.scrollIntoView()
    const executeScrollFooterHomeTemplate = () => myRefFooterHomeTemplate.current.scrollIntoView()

    return (
        <>
            <HomeHeader myRefHeaderHomeTemplate={myRefHeaderHomeTemplate} executeScrollHeaderHomeTemplate={executeScrollHeaderHomeTemplate} executeScrollGoldSponsorHome={executeScrollGoldSponsorHome} executeScrollFooterHomeTemplate={executeScrollFooterHomeTemplate} />
            <Component myRefGoldSponsorHome={myRefGoldSponsorHome}/>
            <HomeFooter myRefFooterHomeTemplate={myRefFooterHomeTemplate}/>
        </>
    )
}
