import React,{ Component , Fragment } from 'react'
import ScaleData from '../ScaleData/ScaleData'
import RfIdData from '../RfIdData/RfIdData'

class Weighing extends Component{
    render(){
        return(
            <Fragment>
                <p>Weighing</p>
                <ScaleData></ScaleData>
                <RfIdData></RfIdData>
            </Fragment>
        )
    }
}

export default Weighing;