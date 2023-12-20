import onboard_image from '../svgs/onboard.svg'
import {FaPlay} from 'react-icons/fa'
import '../css/onboard.css'

function Onboard(){
    return (

        <div className="onboard_container">
          <div className="onboard_image m25">
            <img src={onboard_image} alt="" />
          </div>
          <div className="onboard_section m25">
            <div className="title">Welcome to SwiftLearn</div>
            <div className="article">
            Your gateway to a world of knowledge and skills. We're thrilled to have you on board SwiftLearn is designed to make your learning experience seamless and enjoyable.
            </div>
          </div>
          <div className="onboard_navs">
            <div className="sliders">
                <div className="slider"></div>
                <div className="slider active"></div>
                <div className="slider"></div>
            </div>
            <div className="page_play">
                <div className="player">
                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="78" viewBox="0 0 117 78" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0268 0H133.793V77.64H39.0268C17.5871 77.64 0.206787 60.2597 0.206787 38.82C0.206787 17.3803 17.5871 0 39.0268 0Z" fill="#003F91"/>
</svg>
<div className="wrap_play">
      <FaPlay />
</div>
                  
                </div>
            </div>
          </div>
        </div>
    )
}


export default Onboard