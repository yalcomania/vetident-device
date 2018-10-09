import React, { Component } from 'react'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './WeighingHistory.css'
import * as actionTypes from '../../store/actions';

class WeighingHistory extends Component {

    DeleteRecordsHandle = () => {
        this.props.onRecordsDeleted();
    }

    render() {

        var content = null;
        if (this.props.records.length > 0) {
            console.log(this.props.records);
            content = this.props.records.map((history, index) => {
                return (
                    <tr key={index}>
                        <td><Moment format="DD.MM.YYYY HH:MM:SS">{history.date}</Moment></td>
                        <td>{history.rfId == null ? '-' : history.rfId}</td>
                        <td>{history.weight} kg.</td>
                    </tr>
                )
            })
        }

        

        return (
            <div>
                <div>
                    <button className="ClearButton" onClick={this.DeleteRecordsHandle}>Kayıtları Temizle</button>
                </div>
                <div>
                    <table className="WeighingHistoryTable">
                        <thead>
                            <tr>
                                <th>Tarih</th>
                                <th>Küpe No</th>
                                <th>Ağırlık</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        records: state.records,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRecordsDeleted: () => dispatch({ type: actionTypes.CLEAR_HISTORY })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeighingHistory);