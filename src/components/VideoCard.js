import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);
    if (!info || !info.snippet || !info.statistics) return null;
  
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-[22rem] shadow-lg'>
       <img 
       className='rounded-lg w-[22rem]'
       alt="thumbnail" 
       src={thumbnails.medium.url} 
       />
       <ul className='leading-6'>
        <li className='text-lg font-semibold pt-1.5'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCard
