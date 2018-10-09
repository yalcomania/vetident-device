import React, { Component } from 'react'

class WeighingHistory extends Component {
    render() {

        var content = null;
        if (this.props.records) {
            content = this.props.records.map(history => {
                return (
                    <tr>
                        <td>{history.date}</td>
                        <td>{history.rfId}</td>
                        <td>{history.weight}</td>
                    </tr>
                )
            })
        }

        return (
            <table>
                {content}
            </table>
        );
    };
}

export default WeighingHistory;