var assign = require('object-assign');
var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
    displayName: 'VideoJS',

    componentDidMount() {
        var self = this;
        var player = videojs(this.refs.video, this.props.options).ready(function () {
            self.player = this;
            self.player.on('loadstart', self.handleLoadStart);
            self.player.on('waiting', self.handleWaiting);
            self.player.on('canplay', self.handleCanPlay);
            self.player.on('canplaythrough', self.handleCanPlayThrough);
            self.player.on('playing', self.handlePlaying);
            self.player.on('ended', self.handleEnded);
            self.player.on('seeking', self.handleSeeking);
            self.player.on('seeked', self.handleSeeked);
            self.player.on('play', self.handlePlay);
            self.player.on('firstplay', self.handleFirstPlay);
            self.player.on('pause', self.handlePause);
            self.player.on('durationchange', self.handleDurationChange);
            self.player.on('fullscreenchange', self.handleFullScreenChange);
            self.player.on('error', self.handleError);
            self.player.on('loadedmetadata', self.handleLoadedMetadata);
            self.player.on('posterchange', self.handlePosterChange);
            self.player.on('textdata', self.handleTextData);
        });
        if (this.props.onPlayerInit) this.props.onPlayerInit(player);
    },

    handleLoadStart: function () {
        if (this.props.onLoadStart) {
            this.props.onLoadStart(this.player)
        }
    },

    handleWaiting: function () {
        if (this.props.onWaiting) {
            this.props.onWaiting(this.player)
        }
    },

    handleCanPlay: function () {
        if (this.props.onCanPlay) {
            this.props.onCanPlay(this.player)
        }
    },

    handleCanPlayThrough: function () {
        if (this.props.onCanPlayThrough) {
            this.props.onCanPlayThrough(this.player)
        }
    },

    handlePlaying: function () {
        if (this.props.onPlaying) {
            this.props.onPlaying(this.player)
        }
    },

    handleEnded: function () {
        if (this.props.onEnded) {
            this.props.onEnded(this.player)
        }
    },

    handleSeeking: function () {
        if (this.props.onSeeking) {
            this.props.onSeeking(this.player)
        }
    },

    handleSeeked: function () {
        if (this.props.onSeeked) {
            this.props.onSeeked(this.player)
        }
    },

    handlePlay: function () {
        if (this.props.onPlay) {
            this.props.onPlay(this.player)
        }
    },

    handleFirstPlay: function () {
        if (this.props.onFirstPlay) {
            this.props.onFirstPlay(this.player)
        }
    },

    handlePause: function () {
        if (this.props.onPause) {
            this.props.onPause(this.player)
        }
    },

    handleDurationChange: function () {
        if (this.props.onDurationChange) {
            this.props.onDurationChange(this.player)
        }
    },

    handleFullScreenChange: function () {
        if (this.props.onFullScreenChange) {
            this.props.onFullScreenChange(this.player)
        }
    },

    handleError: function () {
        if (this.props.onError) {
            this.props.onError(this.player)
        }
    },

    handleLoadedMetadata: function () {
        if (this.props.onLoadedMetadata) {
            this.props.onLoadedMetadata(this.player)
        }
    },

    handlePosterChange: function () {
        if (this.props.onPosterChange) {
            this.props.onPosterChange(this.player)
        }
    },

    handleTextData: function () {
        if (this.props.onTextData) {
            this.props.onTextData(this.player)
        }
    },

    render() {
        var props = blacklist(this.props, 'children', 'className', 'src', 'type',
            'onLoadStart', 'onWaiting', 'onCanPlay', 'onCanPlayThrough', 'onPlaying',
            'onEnded', 'onSeeking', 'onSeeked', 'onPlay', 'onFirstPlay', 'onPause',
            'onDurationChange', 'onFullScreenChange', 'onError', 'onLoadedMetadata',
            'onPosterChange', 'onTextData', 'onPlayerInit', 'options');
        props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

        assign(props, {
            ref: 'video',
            controls: true
        });

        return (
            <div>
                <video {... props}>
                    <source src={this.props.src} type={this.props.type}/>
                </video>
            </div>
        )
    }
});
