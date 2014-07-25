try {
    var wrtc = require('wrtc');
} catch (er) {
    var wrtc = null;
}

var PC = wrtc && wrtc.RTCPeerConnection;

module.exports = {
    support: !!PC,
    dataChannel: !!(PC && PC.prototype && PC.prototype.createDataChannel),
    prefix: undefined,
    webAudio: !!(wrtc.RTCAudioContext && wrtc.RTCAudioContext.prototype.createMediaStreamSource),
    mediaStream: !!(wrtc.MediaStream && wrtc.MediaStream.prototype.removeTrack),
    screenSharing: false,
    AudioContext: wrtc.RTCAudioContext,
    PeerConnection: PC,
    SessionDescription: wrtc.RTCSessionDescription,
    IceCandidate: wrtc.RTCIceCandidate
};
