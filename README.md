# webrtcsupport

## What is this?

A tiny browser module for detecting support for WebRTC and also for extracting the necessary constructors such as `PeerConnection`, `SessionDescription`, and `IceCandidate`.

Suitable for use with browserify/CommonJS on the client. 

If you're not using browserify or you want AMD support use `webrtcsupport.bundle.js`.

This tiny module is used by [SimpleWebRTC](http://simplewebrtc.com), but obviously can be used by itself.

## Installing

```
npm install webrtcsupport
```

## How to use it

Simply require it and it returns a simple object with support flags and useful support info and normalized constructors for various WebRTC related items.

```js
var webrtcSupport = require('webrtcsupport');

// it returns an object with the following:
{
    support: // boolean whether basic WebRTC support exists
    dataChannel: // boolean whether WebRTC data channels are supported
    prefix: // returns browser prefix (either moz or webkit for now)
    screenSharing: // boolean guess of whether screensharing is supported,
    webAudio: // A support for web audio API
    AudioContext: // the audio context constructor from the web audio API
    PeerConnection: // constructor for creating a peer connection
    SessionDescription: // constructor for RTCSessionDescriptions
    IceCandidate: // constructor for ice candidate
}

```

## License

MIT

## Created By

If you like this, follow: [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

