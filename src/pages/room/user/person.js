import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { helper } from '../../../utils/helper'

import Status from './Status'

export default class Person extends Component {
  state = {
    constraints: {
      audio: false,
      video: true,
    },
    status: {
      audio: false,
      video: false,
    },
  }

  async componentDidMount() {
    /*
    try {
      let { constraints } = this.state
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      const videoTracks = stream.getVideoTracks();
      console.log(`Using video device: ${videoTracks[0].label}`)

      const camera = this.refs.camera
      camera.srcObject = stream
    } catch (e) {
      console.log('fail open camera', e.message);
    }
    */
  }

  getMedia = async ({ video = false, audio = false }) =>  {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video, audio })
      const videoList = stream.getVideoTracks()
      const audioList = stream.getAudioTracks()

      const videoTrack = videoList[0]
      const audioTrack = audioList[0]
      // console.log(`Using video device: ${videoTrack.label}`)
      // console.log(`Using audio device: ${audioTrack.label}`)

      return { data: { stream, video: videoTrack, audio: audioTrack } }
    } catch (e) {
      console.log('fail open camera', e.message)
      return { err: e.message }
    }
  }

  toggleCamera = async () => {
    console.log('toggle camera')
    let { status } = this.state
    let isOn = status.video
    status.video = !status.video
    if (isOn) {
      this.video.stop()
      let camera = this.refs.camera
      camera.srcObject = undefined
    } else {
      let res = await this.getMedia(status)
      if (helper.notNull(res.err)) {
        return
      }

      let data = res.data
      this.video = data.video
      this.audio = data.audio
      this.stream = data.stream

      let camera = this.refs.camera
      camera.srcObject = this.stream
      console.log('get media', res)
    }

    this.setState({ status })
  }

  render() {
    let { status } = this.state
    // let data = this.props.data
    return (
      <Section>
        <Status {...this.props} />
        <Row >
          <Col span={24}>
            <Video ref="camera" autoPlay playsInline />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Icon
              className={ status.video ? 'fas fa-video' : 'fas fa-video-slash'}
              onClick={this.toggleCamera} />
            <Icon className={ status.audio ? 'fas fa-microphone' : 'fas fa-microphone-slash'} />
            <Icon className={ status.audio ? 'fas fa-volume-up' : 'fas fa-volume-off'} />
          </Col>
        </Row>
      </Section>
    )
  }
}

const Section = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  padding: 8px;
  margin-bottom: 10px;

  .status {
    padding: 10px 0px;
  }
`

const Icon = styled.i`
  padding: 0px 2px;
`

const Video = styled.video`
  width: 100%;
`
