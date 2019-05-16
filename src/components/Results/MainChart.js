import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import { connect } from 'react-redux';

class MainChart extends Component {
    render() {
        return (
            <div>
                asdd
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput,
    pageTwoInput: state.pageTwoInput
})

export default connect(mapStateToProps)(MainChart)