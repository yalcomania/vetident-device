import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className="Card">
            <div className="CardHeader">{this.props.title}</div>
                {/* <img src="img_avatar.png" alt="Avatar" /> */}
                <div className="Container">
                    {this.props.children}
                    {/* <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p> */}
                </div>
            </div>
        )
    }
}

export default Card;