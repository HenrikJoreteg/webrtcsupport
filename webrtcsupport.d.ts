/// <reference types="webrtc" />
/**
 * A tiny browser module for detecting support for WebRTC and also for extracting the necessary constructors such as PeerConnection, SessionDescription, and IceCandidate.
 *
 * @interface WebRTCSupport
 */
interface WebRTCSupport {
	/**
	 * whether basic WebRTC support exists
	 *
	 * @type {boolean}
	 * @memberOf WebRTCSupport
	 */
	readonly support: boolean;

    /**
     * browser version
     *
     * @type {number}
     * @memberOf WebRTCSupport
     */
    readonly browserVersion: number;

    /**
     * whether basic support for RTCPeerConnection exists
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportRTCPeerConnection: boolean;

    /**
     * guess whether VP8 is supported by the browser
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportVp8: boolean;

    /**
     * whether getUserMedia is supported by the browser
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportGetUserMedia: boolean;

    /**
     *  whether WebRTC data channels are supported
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportDataChannel: boolean;

    /**
     * whether WebAudio API is supported
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportWebAudio: boolean;

    /**
     * whether MediaStream is supported
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportMediaStream: boolean;

    /**
     * guess of whether screensharing is supported
     *
     * @type {boolean}
     * @memberOf WebRTCSupport
     */
    readonly supportScreenSharing: boolean;

    /**
     * browser prefix (either moz or webkit for now)
     *
     * @type {string}
     * @memberOf WebRTCSupport
     */
    readonly prefix: string;

    /**
     * the audio context constructor from the web audio API
     *
     * @type {AudioContext}
     * @memberOf WebRTCSupport
     */
    AudioContext: new() => AudioContext;

    /**
     * constructor for creating a peer connection
     *
     * @memberOf WebRTCSupport
     */
    PeerConnection: new(configuration?: RTCConfiguration) => RTCPeerConnection;

    /**
     * constructor for RTCSessionDescriptions
     *
     *
     * @memberOf WebRTCSupport
     */
    SessionDescription: new(descriptionInitDict: RTCSessionDescriptionInit) => RTCSessionDescription;

    /**
     * constructor for ice candidate
     *
     *
     * @memberOf WebRTCSupport
     */
    IceCandidate: new() => RTCIceCandidate;

    /**
     * constructor for MediaStreams
     *
     *
     * @memberOf WebRTCSupport
     */
    MediaStream: new(streamOrTracks?: MediaStream | MediaStreamTrack[]) => MediaStream;
    getUserMedia: NavigatorGetUserMedia; // getUserMedia function
}

declare module "webrtcsupport" {
	export = webrtcsupport;
}

declare var webrtcsupport: WebRTCSupport;
