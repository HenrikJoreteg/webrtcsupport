// created by @HenrikJoreteg
var PC = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var IceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;

// export support flags and constructors
module.exports = {
    PeerConnection: PC,
    SessionDescription: SessionDescription,
    IceCandidate: IceCandidate,
    support: !!PC,
    dataChannel: !!(PC && PC.prototype.createDataChannel)
};
