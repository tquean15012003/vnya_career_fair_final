import React from 'react'

export default function HomeFooter(props) {

  return (
    <div ref={props.myRefFooterHomeTemplate}>
      <footer className="container mx-auto p-4 sm:p-6">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center flex-col">
          <div className="flex mb-4 space-x-6 justify-center">
            <a href="https://www.facebook.com/VietnameseYouthAlliance" target='_blank' rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <i style={{ fontSize: "25px" }} className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/vnyaofficial/" target='_blank' rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <i style={{ fontSize: "25px" }} className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/vietnam-youth-alliance-in-singapore-vnya/?originalSubdomain=sg" target='_blank' rel="noreferrer" className="text-gray-500 hover:text-gray-900">
              <i style={{ fontSize: "25px" }} className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:vietnamesecommunity.sg@gmail.com" className="text-gray-500 hover:text-gray-900">
              <i style={{ fontSize: "25px" }} className="fa fa-envelope"></i>
            </a>
          </div>
          <span className="text-sm text-gray-500 sm:text-center">© 2022 <a href="https://www.facebook.com/VietnameseYouthAlliance" target="_blank" rel="noreferrer" className="hover:underline">Vietnamese Youth Alliance</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>

  );
}
