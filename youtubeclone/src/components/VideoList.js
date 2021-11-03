import React from 'react';

export const VideoList = ({ videos, setSelectVideos }) => {
  return (
    <>
      {videos.map((r, key) => {
        return (
          <div className='row video_list_item' key={key} onClick={() => setSelectVideos(videos[key])} style={{ cursor: 'pointer', marginBottom: '10px' }}>
            <div className='col-lg-7 col-12 col-sm-6 col-md-12 video_iframe'>
              <img className='w-100 h-100' src={r.snippet.thumbnails.medium.url} alt='' />
            </div>
            <div className='col-lg-5 col-12 col-sm-6 col-md-12 video_list_info_block text-white'>
              <h6 className='m-0'>{r.snippet.title}</h6>
              <p className='m-0 mt-1' style={{ color: '#686868' }}>{r.snippet.channelTitle}</p>
            </div>
          </div>
        )
      })}
    </>
  );
};
