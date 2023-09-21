import React from 'react'
// import getVideoId from "get-video-id";

const VideoEmbedPreview = ({title, url}) => {
  // console.log('props', title)
  // const title = value.title;
  // const url = value.url;

  const wrapper = {
    // height: "5em",
    display: 'flex',
    alignItems: 'center',
  }

  const videoWrapper = {
    width: '50%',
  }

  const titleStyle = {
    padding: '0 1em',
    width: '50%',
  }

  const responsiveVideoContainer = {
    padding: '56.25% 0 0 0',
    position: 'relative',
    width: '100%',
    height: 'auto',
  }

  const responsiveVideoPlayer = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  // decide whether we have youtube or vimeo
  if (url) {
    let source
    let service
    // console.log(url);
    let search = url.includes('youtu')
    if (search) {
      source = 'https://youtube.com/embed/'
      service = 'youtube'
    } else {
      source = 'https://player.vimeo.com/video/'
      service = 'vimeo'
    }
    // find the code on the video

    let nSlash = url.lastIndexOf('/')
    let resultOne = url.substring(nSlash + 1)
    let videoCode = resultOne
    // sometimes youtube urls have a watch?= bit in them...
    let nEqual = url.indexOf('=')
    let nAnd = url.indexOf('&')
    let videoCodeFinal

    if (url.includes('playlist')) {
      let listLoc = url.indexOf('list')
      videoCodeFinal = 'videoseries' + url.substring(listLoc + 4)

      // console.log("playlist");
    } else {
      if (nEqual === -1) {
        videoCodeFinal = videoCode
      } else if (nEqual > 0 && nAnd === -1) {
        let resultTwo = url.substring(nEqual + 1)
        videoCodeFinal = resultTwo
      } else {
        let resultTwo = url.substring(nEqual + 1, nAnd)
        videoCodeFinal = resultTwo
      }
    }

    // video series looks like this:
    // https://www.youtube.com/playlist?list=PLGAnN7vfHn1pnrKvmnM4qTBvDy5vks_7P
    // needs to look like this
    // https://www.youtube.com/embed/videoseries?list=PLGAnN7vfHn1pnrKvmnM4qTBvDy5vks_7P
    // console.log(videoCodeFinal);

    // install https://www.npmjs.com/package/get-video-id, to get Vimeo or YouTube IDs
    // const getVideoId = require('get-video-id')

    // const id = getVideoId(url).id
    // const service = getVideoId(url).service

    // const vimeoEmbedUrl = 'https://player.vimeo.com/video/' + id
    // const youtubeEmbedUrl = 'https://www.youtube.com/embed/' + id

    if (service === 'vimeo') {
      return (
        <div style={wrapper}>
          <div style={videoWrapper}>
            <div style={responsiveVideoContainer}>
              <iframe
                title="video"
                src={`${source}${videoCodeFinal}`}
                style={responsiveVideoPlayer}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          <div style={titleStyle}>{title}</div>
        </div>
      )
    }

    if (service === 'youtube') {
      return (
        <div style={wrapper}>
          <div style={videoWrapper}>
            <div style={responsiveVideoContainer}>
              {title && <h3>{title}</h3>}
              <iframe
                title="video"
                src={`${source}${videoCodeFinal}`}
                style={responsiveVideoPlayer}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          {title && <div style={titleStyle}>{title}</div>}
        </div>
      )
    }
  } else {
    return <div>Missing YouTube or Vimeo URL</div>
  }

  return <div />
}

export default {
  name: 'videoItem',
  type: 'object',
  title: 'Video Embed',
  components: {
    preview: VideoEmbedPreview,
  },

  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      url: 'url',
    },
    // component: VideoEmbedPreview,
  },
}
