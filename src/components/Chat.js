import React, { Component } from 'react'
import '../styles/Chat.css'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

class Chat extends Component {

  state = {
    message: '',
    allMessages: []
  }

  render() {
    return (
      <div className='Chat'>
        <ChatMessages
          messages={this.state.allMessages || []}
          endRef={this._endRef}
        />
        <ChatInput
          message={this.state.message}
          onTextInput={(message) => this.setState({message})}
          onResetText={this._resetText}
          onSend={this._onSend}
        />
      </div>
    )
  }

  _onSend = () => {
    console.log(`Send: ${this.state.message}`)
    const newMessages = this.state.allMessages
    newMessages.push({ text: this.state.message })
    this.setState({allMessages: newMessages})
  }

  _resetText = () => {
    this.setState({message: ''})
  }


  /*
   * AUTO SCROLLING
   */

  _endRef = (element) => {
    this.endRef = element
  }

  componentDidUpdate(prevProps) {
    // scroll down with every new message
    if (this.endRef) {
      this.endRef.scrollIntoView()
    }
  }

}

export default Chat