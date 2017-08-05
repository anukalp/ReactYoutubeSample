import React, { Component } from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Video Loading ....</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='responsive-item' src={url}/>
      </div>
      <div className='details'>
          <strong>{video.snippet.title}</strong>
          <div className='media-heading'>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
