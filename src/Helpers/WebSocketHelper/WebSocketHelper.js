import { Component } from 'react'

class WebSocketHelper extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.connection = new WebSocket('ws://'+window.location.hostname+':40510');
    this.connection.onmessage = evt => {
      console.log(evt.data);
      this.props.onMessageRecieved(evt.data);
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
