import React from 'react';
import { SelectVideo } from './SelectVideo';
import { VideoList } from './VideoList';

export const VideoBlock = ({ selectVideos, videos, setSelectVideos }) => {
  if (!selectVideos.snippet.title) {
    return <h4 className='text-white text-center'>Please, enter the name of the video</h4>
  }
  return (
    <div className='section_video h-100 row'>
      <div className='col-lg-8 col-12 col-md-8'>
        <SelectVideo selectVideos={selectVideos} />
      </div>
      <div className='col-lg-4 col-12 col-md-4'>
        <VideoList videos={videos} setSelectVideos={setSelectVideos} />
      </div>
    </div>
  );
};
