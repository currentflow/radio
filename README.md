# [Radio](https://currentflow.github.io/radio/)  
#### *Internet radio for educational and personal use*

v: 0.2.1


### Todo
- [✔] Update to Svelte 5, cleanup code ~ 5/7/25
- [ ] 


---


``` sh
npm run gh-pages
git add . && git commit -m "update"
git push
```

<br>

## Methods
- **load()** - 	Re-loads the audio/video element
- **play()** - 	Starts playing the audio/video
- **pause()** - 	Pauses the currently playing audio/video

## Properties
- **currentSrc** -	Returns the URL of the current audio/video
- **currentTime** - 	Sets or returns the current playback position in the audio/video (in seconds)
- **duration** - 	Returns the length of the current audio/video (in seconds)
- **ended** - 	Returns whether the playback of the audio/video has ended or not
- **error** - 	Returns a MediaError object representing the error state of the audio/video
- **loop** - 	Sets or returns whether the audio/video should start over again when finished
- **networkState** - 	Returns the current network state of the audio/video
  -  0 = *NETWORK_EMPTY* - audio/video has not yet been initialized
  -  1 = *NETWORK_IDLE* - audio/video is active and has selected a resource, but is not using the network
  -  2 = *NETWORK_LOADING* - browser is downloading data
  -  3 = *NETWORK_NO_SOURCE* - no audio/video source found
- **paused** - 	Returns whether the audio/video is paused or not
- **played** - 	Returns a TimeRanges object representing the played parts of the audio/video
- **readyState** - 	Returns the current ready state of the audio/video
  -  0 = *HAVE_NOTHING* - no information whether or not the audio/video is ready
  -  1 = *HAVE_METADATA* - metadata for the audio/video is ready
  -  2 = *HAVE_CURRENT_DATA* - data for the current playback position is available, but not enough data to play next frame/millisecond
  -  3 = *HAVE_FUTURE_DATA* - data for the current and at least the next frame is available
  -  4 = *HAVE_ENOUGH_DATA* - enough data available to start playing
- **src** - 	Sets or returns the current source of the audio/video element
- **startDate** - 	Returns a Date object representing the current time offset
- **volume** - 	Sets or returns the volume of the audio/video

## Events
- **abort** - 	Fires when the loading of an audio/video is aborted
- **canplay** - 	Fires when the browser can start playing the audio/video
- **canplaythrough** - 	Fires when the browser can play through the audio/video without stopping for buffering
- **durationchange** - 	Fires when the duration of the audio/video is changed
- **emptied** - 	Fires when the current playlist is empty
- **ended** - 	Fires when the current playlist is ended
- **error** - 	Fires when an error occurred during the loading of an 

## audio/video
- **loadeddata** - 	Fires when the browser has loaded the current frame of the audio/video
- **loadedmetadata** - 	Fires when the browser has loaded meta data for the audio/video
- **loadstart** - 	Fires when the browser starts looking for the audio/video
- **pause** - 	Fires when the audio/video has been paused
- **play** - 	Fires when the audio/video has been started or is no longer - paused
- **playing** - 	Fires when the audio/video is playing after having been paused or stopped for buffering
- **progress** - 	Fires when the browser is downloading the audio/video
- **ratechange** - 	Fires when the playing speed of the audio/video is changed
- **seeked** - 	Fires when the user is finished moving/skipping to a new position in the audio/video
- **seeking** - 	Fires when the user starts moving/skipping to a new position in the audio/video
- **stalled** - 	Fires when the browser is trying to get media data, but data is not available
- **suspend** - 	Fires when the browser is intentionally not getting media data
- **timeupdate** - 	Fires when the current playback position has changed
- **volumechange** - 	Fires when the volume has been changed
- **waiting** - 	Fires when the video stops because it needs to buffer the next frame

<br>

## Resources
-[web.dev:PWA](https://web.dev/learn/pwa)
- [mozilla: Audio Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [mozilla: Web_Audio_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [mozilla: Web_Audio_API Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [w3schools: Audio Element](https://www.w3schools.com/tags/ref_av_dom.asp)  
- stream urls:
  - [radio-browser.info](https://www.radio-browser.info)
  - [fmstream.org](https://fmstream.org)
