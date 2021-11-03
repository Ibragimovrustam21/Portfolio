import React from 'react';

export const SelectVideo = ({ selectVideos: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`
  
  return (
    <div className='select_video'>
      <div className='video_iframe'>
        <iframe
          frameBorder='0'
          title='VideoPlayer'
          allowFullScreen
          src={videoSrc}
          className='h-100 w-100'
        />
      </div>
      <div className='video_info_block text-white  mt-3'>
        <h4>{title}</h4>
        <h6 className='my-3'>{channelTitle}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};
