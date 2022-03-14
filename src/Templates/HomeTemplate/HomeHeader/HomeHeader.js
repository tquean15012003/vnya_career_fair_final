/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setToggle2Action, setToggleAction, setTranslateAction } from '../../../redux/actions/AppEffectActions'

export default function HomeHeader(props) {

  const { toggle, toggle_2, translate } = useSelector(state => state.AppEffectReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    // capture the event when position > 300, the fixed nav will appear
    window.addEventListener("scroll", () => {
      const position = window.pageYOffset
      if (position > 300) {
        dispatch(setTranslateAction("translateY(0)"))
      }
      else {
        dispatch(setTranslateAction("translateY(-100px)"))
        dispatch(setToggle2Action(true))
      }
    })
  }, [])

  return (
    <>
      {/* Header Nav*/}
      <nav ref={props.myRefHeaderHomeTemplate} className="py-2 md:py-3 text-white bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container px-4 mx-auto md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <button onClick={() => {
              dispatch(setToggleAction(!toggle))
            }} className="border border-solid border-white px-3 py-1 rounded text-gray-600 opacity-80 sm:hidden">
              <i className="fas fa-bars text-white" />
            </button>
            <a onClick={() => { props.executeScrollHeaderHomeTemplate() }} className="cursor-pointer font-bold text-xl text-indigo-600">
              <div className="hidden sm:block" style={{ backgroundImage: `url('./assets/img/vnya_logo.png')`, width: "61px", height: "60px", backgroundSize: "cover" }}>
                <img src="./assets/img/vnya_logo.png" style={{ width: "61px", height: "60px", opacity: "0" }} alt="./assets/img/vnya_logo.png" />
              </div>
              <div className="block sm:hidden" style={{ backgroundImage: `url('./assets/img/vnya_logo.png')`, width: "61px", height: "60px", backgroundSize: "cover" }}>
                <img src="./assets/img/vnya_logo.png" style={{ width: "61px", height: "60px", opacity: "0" }} alt="./assets/img/vnya_logo.png" />
              </div>
            </a>
            <p className="text-xl font-bold break-all hidden sm:block md:hidden">Vietnamese Youth Alliance</p>
            <button onClick={() => {
              dispatch(setToggleAction(!toggle))
            }} className="border border-solid border-white px-3 py-1 rounded text-gray-600 hidden sm:block sm:opacity-80 sm:hover:opacity-75 md:hidden cursor-default sm:cursor-pointer ">
              <i className="fas fa-bars text-white" />
            </button>
            <button className="border border-solid border-white px-3 py-1 rounded text-gray-600 sm:hidden block sm:opacity-80 opacity-0 cursor-default sm:cursor-pointer ">
              <i className="fas fa-bars text-white" />
            </button>
          </div>
          <div className="md:ml-10 lg:ml-1 xl:ml-5 text-xl hidden md:block">
            <p className="font-semibold break-all">Vietnamese Youth Alliance</p>
          </div>
          <div className={`${toggle ? "hidden" : "flex"} md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}>
            <Link to='/' className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-semibold text-white rounded hover:bg-orange-500 transition-colors duration-500">About</Link>
            <a onClick={() => { props.executeScrollGoldSponsorHome() }} className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-semibold text-white rounded hover:bg-orange-500 transition-colors duration-500">Partners</a>
            <Link to='/contact' className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-semibold text-white rounded hover:bg-orange-500 transition-colors duration-500">Contact us</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVdwDSpxli4ZZhHI5xN95JuHahsXek0HBX7NNWDUD-mOLRrw/viewform" target="_blank" className="cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 border-t-4 border-r-4 border-orange-700 rounded-md duration-300 hover:scale-120" rel="noreferrer">Register</a>
          </div>
        </div>
      </nav>

      {/* Fixed Nav*/}
      <nav className={`z-10 fixed w-full py-2 md:py-3 text-white bg-gradient-to-b from-blue-900/90 to-blue-800/90 top-0 transition-all duration-500`} style={{ transform: `${translate}` }}>
        <div className="container px-4 mx-auto md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <button onClick={() => {
              dispatch(setToggle2Action(!toggle_2))
            }} className="border border-solid border-white px-3 py-1 rounded text-gray-600 opacity-80 sm:hidden">
              <i className="fas fa-bars text-white" />
            </button>
            <a onClick={() => { props.executeScrollHeaderHomeTemplate() }} className="cursor-pointer font-bold text-xl text-indigo-600">
              <div style={{ backgroundImage: `url('./assets/img/vnya_logo.png')`, width: "51px", height: "50px", backgroundSize: "cover" }}>
                <img src="./assets/img/vnya_logo.png" style={{ width: "51px", height: "50px", opacity: "0" }} alt="./assets/img/vnya_logo.png" />
              </div>
            </a>
            <p className="text-xl font-bold break-all hidden sm:block md:hidden">Vietnamese Youth Alliance</p>
            <button onClick={() => {
              dispatch(setToggle2Action(!toggle_2))
            }} className="border border-solid border-white px-3 py-1 rounded text-gray-600 hidden sm:block sm:opacity-80 sm:hover:opacity-75 md:hidden cursor-default sm:cursor-pointer ">
              <i className="fas fa-bars text-white" />
            </button>
            <button className="border border-solid border-white px-3 py-1 rounded text-gray-600 sm:hidden block sm:opacity-80 opacity-0 cursor-default sm:cursor-pointer ">
              <i className="fas fa-bars text-white" />
            </button>
          </div>
          <div className="md:ml-10 lg:ml-5 text-xl hidden md:block">
            <p className="font-semibold break-all">Vietnamese Youth Alliance</p>
          </div>
          <div className={`${toggle_2 ? "hidden" : "flex"} md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}>
            <Link to='/' className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-medium text-white rounded hover:bg-orange-500 transition-colors duration-500">About</Link>
            <a onClick={() => { props.executeScrollGoldSponsorHome() }} className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-medium text-white rounded hover:bg-orange-500 transition-colors duration-500">Partners</a>
            <Link to='/contact' className="md:hidden lg:block cursor-pointer p-2 lg:px-4 md:mx-2 text-lg font-medium text-white rounded hover:bg-orange-500 transition-colors duration-500">Contact us</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVdwDSpxli4ZZhHI5xN95JuHahsXek0HBX7NNWDUD-mOLRrw/viewform" target="_blank" className="cursor-pointer opacity-100 p-2 lg:px-4 md:mx-2 text-lg font-medium text-white border-t-4 border-r-4 border-orange-700 rounded-md bg-orange-500 hover:bg-orange-600 duration-300 hover:scale-120" rel="noreferrer">Register</a>
          </div>
        </div>
      </nav>
    </>
  )
}