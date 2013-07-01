(function(e){if("function"==typeof bootstrap)bootstrap("webrtcsupport",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeWebrtcsupport=e}else"undefined"!=typeof window?window.webrtcsupport=e():global.webrtcsupport=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
;