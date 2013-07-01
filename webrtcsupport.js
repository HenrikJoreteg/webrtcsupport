// created by @HenrikJoreteg
var PC = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var IceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
var prefix = function () {
    if (window.mozRTCPeerConnection) {
        return 'moz';
    } else if (window.webkitRTCPeerConnection) {
        return 'webkit';
    }
}();
var screenSharing = navigator.userAgent.match('Chrome') && parseInt(navigator.userAgent.match(/Chrome\/(.*) /)[1], 10) >= 26;
var webAudio = !!window.webkitAudioContext;

// export support flags and constructors
module.exports = {
    support: !!PC,
    dataChannel: !!(PC && PC.prototype.createDataChannel),
    prefix: prefix,
    webAudio: webAudio,
    screenSharing: screenSharing,
    PeerConnection: PC,
    SessionDescription: SessionDescription,
    IceCandidate: IceCandidate
};
