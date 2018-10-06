import React, { Component } from 'react'

class WebSocketHelper extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    console.log("componentDidMount2");
    this.connection = new WebSocket('ws://192.168.1.21:40510');
    this.connection.onmessage = evt => {
      console.log(evt.data);
      this.props.newWeightHasCome(evt.data);
      this.setState({
        messages: this.state.messages.concat([evt.data])
      })
    };

    // setInterval(_ => {
    //   this.connection.send(Math.random())
    // }, 2000)
  }


  render() {
    // return <ul>{this.state.messages.slice(-5).map((msg, idx) => <li key={'msg-' + idx}>{msg}</li>)}</ul>;
    return null;
  }

}


export default WebSocketHelper;
