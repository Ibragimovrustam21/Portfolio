import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { VideoBlock } from './components/VideoBlock';

export const App = () => {
  const getVideo = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
  })

  const [videos, setVideos] = useState([])
  const [selectVideos, setSelectVideos] = useState({ id: {}, snippet: {} })

  async function getVideoFromServer(value) {
    const { data: { items: videos } } = await getVideo.get('search', {
      params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyAywuv_HBweD-0mRYV9qwKbOBnxeGsimY4',
        q: value
      }
    })

    setVideos(videos)
    setSelectVideos(videos[0])
  }

  return (
    <div className="App container-fluid">
      <Header getVideoFromServer={getVideoFromServer} />
      <VideoBlock selectVideos={selectVideos} videos={videos} setSelectVideos={setSelectVideos} />
    </div>
  )
}

