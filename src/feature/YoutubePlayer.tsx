import React, { Component } from 'react'
import YouTube from 'react-youtube'

class YoutubePlayer extends Component {
    render() {
        const opts = {
            height: '720',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        }

        return (
            <YouTube
                videoId="GUE7vIGmugk"
                opts={opts}
                onReady={this._onReady}
            />
        )
    }

    _onReady(e) {
        // access to player in all event handlers via event.target
        e.target.playVideo()
    }
}

export { YoutubePlayer }
