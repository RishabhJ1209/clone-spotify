import React from 'react'
import './Footer.css'

import { ReactComponent as Playicon } from '../assest/Playicon.svg'
import { ReactComponent as Nexticon } from '../assest/Nexticon.svg'
import { ReactComponent as Previous } from '../assest/Previous.svg'
import { ReactComponent as Pause } from '../assest/Pause.svg'

export default function Footer() {

    const [isPlaying,setIsPlaying]=React.useState(false)
  return (
    <div className='footer-container'>
        <div className='player-controller'>
            <Previous width={'32px'}/>
            {
                isPlaying ? <Pause width={'32px'} onClick={() => setIsPlaying(false)} /> : <Playicon width={'32px'} onClick={() => setIsPlaying(true)} />
            }
            
            <Nexticon width={'32px'}/>
            

        </div>
    </div>
  )
}
