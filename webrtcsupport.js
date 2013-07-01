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

// export support flags and constructors
module.exports = {
    PeerConnection: PC,
    SessionDescription: SessionDescription,
    IceCandidate: IceCandidate,
    support: !!PC,
    dataChannel: !!(PC && PC.prototype.createDataChannel),
    prefix: prefix
};
