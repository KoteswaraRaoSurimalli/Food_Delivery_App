import React from 'react'
import './AppDownload.css'
// import { isAssertionExpression } from 'typescript'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
      <p>For Mobile Application Download <br />SGK made App's </p>
      <div className="app-download-plaforms">
        <img src={assets.play_store}alt="" />
        <img src={assets.app_store}alt="" />
      </div>
    </div>
  )
}

export default AppDownload
