import React from 'react'
import './Sidebar.css'

import { ReactComponent as Homeicon } from '../assest/Homeicon.svg';
import { ReactComponent as Search } from '../assest/Search.svg';
import { ReactComponent as Bookmark } from '../assest/Bookmark.svg';


const myplaylist= [

    {
        id:1,
        name:'Rishabh',

    },
    
    {
        id:2,
        name:'Jubin'

    },
    
    {
        id:3,
        name:'Arshit'

    },
    
    {
        id:4,
        name:'Tony'

    },
    
    {
        id:5,
        name:'Abhijit'

    },
    
    {
        id:6,
        name:'Ron'

    },
    
    {
        id:7,
        name:'Neha'

    },
    
    {
        id:8,
        name:'Justin'

    },

]


export default function Sidebar() {
  return (
    <div className='side-bar-conatiner'>
        <div className='side-bar-items'>
        <Homeicon width={'18px'} strokeWidth={'2px'} />Home
        </div>
        <div className='side-bar-items'>
        <Search width={'18px'} strokeWidth={'2px'} />Search
        </div>
        <div className='side-bar-items'>
        <Bookmark width={'18px'} strokeWidth={'2px'} />Bookmark
        </div>

        <div className='side-option'>
            {
                myplaylist.map(item=>{
                    return(
                        <div className='side-bar-items' key={item.id}>
                            {item.name}
                            
                        </div>
                    )

                })
            }

        </div>

    </div>
  )
}
