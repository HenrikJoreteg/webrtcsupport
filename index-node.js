// Once node.js gains a robust module integrating WebRTC that can
// be easily added to dependencies, we'll update this to expose it

module.exports = {
    support: false,
    prefix: undefined,
    dataChannel: false,
    webAudio: false,
    mediaStream: false,
    screenSharing: false,
    AudioContext: undefined,
    PeerConnection: undefined,
    SessionDescription: undefined,
    IceCandidate: undefined
};
