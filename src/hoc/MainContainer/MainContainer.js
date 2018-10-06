import React,{Component} from 'react'
import './MainContainer.css'
class MainContainer extends Component{
    render(){
        return(
            <div className="MainContainer">
            {this.props.children}
            </div>
        )
    }
}

export default MainContainer;