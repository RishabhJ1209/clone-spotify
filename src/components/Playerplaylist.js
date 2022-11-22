import React from 'react'
import './Playerplaylist.css'

const playlist = [
    {
        id: 1,
        title: 'Shape of you',
        artist: 'Ed Sheeran',
        album: 'Divide',
        duration: '3:53',
      },
      {
        id: 2,
        title: 'See you again',
        artist: 'Wiz Khalifa',
        album: 'Furious 7',
        duration: '3:58',
      },
      {
        id: 3,
        title: 'Lemonade',
        artist: 'Diljit',
        album: 'Soorma',
        duration: '3:15',
      },
      {
        id: 4,
        title: 'Dilbar',
        artist: 'Neha Kakkar',
        album: 'Satyameva Jayate',
        duration: '3:30',
      },
      {
        id: 5,
        title: 'Tera Ban Jaunga',
        artist: 'Kabir Singh',
        album: 'Kabir Singh',
        duration: '3:45',
      },
      {
        id: 6,
        title: 'Besabriyan',
        artist: 'Armaan Malik',
        album: 'Machine',
        duration: '3:45',
      },
      {
        id: 7,
        title: 'Sugar',
        artist: 'Maroon 5',
        album: 'V',
        duration: '3:45',
      },
      {
        id: 8,
        title: 'Love you zindagi',
        artist: 'Arijit Singh',
        album: 'Dear Zindagi',
        duration: '4:15',
      }

]

export default function Playerplaylist() {
  return (
    <div className='player-playlist-container'>
        <div className='player-playlist-header'>
            <div className='playlist-image-card'>

            </div>
            <div className='playlist-boby'>
                <p>PLAYLIST</p>
                <h1>ALL TIME BEST</h1>
            </div>
        </div>

        <div className='playlist-list'>
            
            <div className='playlist-list-id'>
             #
            </div>
            <div className='playlist-list-title'>
            TITLE
            </div>
            <div className='playlist-list-album'>
            ALBUM  
            </div>
            <div className='playlist-list-duration'>
            DURATION
            </div>

        </div>

        <div className='playlist-list-container'>
            {
                playlist.map(item=>{
                    return(
                        <div className='playlist-list'>
                            <div className='playlist-list-id'>
                                {item.id}
                            </div>
                            <div className='playlist-list-title'>
                                {item.title}
                            </div>
                            <div className='playlist-list-album'>
                                {item.album}
                            </div>
                            <div className='playlist-list-duration'>
                                {item.duration}
                            </div>

                        </div>
                    )})
            }

        </div>
    </div>
  )
}
