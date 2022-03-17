/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import HomeGoldSponsor from './HomeGoldSponsor/HomeGoldSponsor'
import HomeBackground from './HomeBackground/HomeBackground'
import HomeHighlight from './HomeHighlight/HomeHighlight'
import HomePartner from './HomePartner/HomePartner'
import HomeGuestSpeaker from './HomeGuestSpeaker/HomeGuestSpeaker'
import { useDispatch, useSelector } from 'react-redux'
import { setSponsorAction } from '../../redux/actions/SponsorActions'
import { setBackToHomeAction } from '../../redux/actions/AppEffectActions'

export default function Home(props) {

  const { sponsorList } = useSelector(state => state.SponsorReducer)

  const goldSponsorList = sponsorList.filter(sponsor => sponsor.goldSponsor)

  const mediaSponsorList = sponsorList.filter(sponsor => !sponsor.goldSponsor)

  const dispatch = useDispatch()

  useEffect(() => {
    // fetch image of sponsors
    dispatch(setSponsorAction())

    // hide back to home button when in Home componnent
    dispatch(setBackToHomeAction(true))
  }, [])

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <HomeBackground />
      <HomeGoldSponsor myRefGoldSponsorHome={props.myRefGoldSponsorHome} goldSponsorList={goldSponsorList} />
      <HomePartner mediaSponsorList={mediaSponsorList} />
      <HomeGuestSpeaker />
      <HomeHighlight />
    </div>
  )
}