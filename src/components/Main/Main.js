import React from 'react'
import "./Main.scss";
import LeftBar from './LeftBar/LeftBar'
import RightBar from './RightBar/RightBar'

const Main = () => {
    return (
      <div className="main">
        <LeftBar />
        <RightBar />
      </div>
    );
}

export default Main
