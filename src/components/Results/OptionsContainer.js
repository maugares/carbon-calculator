import React, { Component } from 'react'
import OptionsPanel from './OptionsPanel'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/input'

class OptionsContainer extends Component {
    onChange = (data, target) => {
        console.log(data, target)
        this.props.updateInput({ [target]: data })
    }

    render() {
        return (
            <OptionsPanel 
                values={this.props} 
                onChange={this.onChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    industry: state.pageOneInput.industry,
    turnover: state.pageOneInput.turnover, 
    turnoverGrowth: state.pageOneInput.turnoverGrowth, 
    profitMargin: state.pageOneInput.profitMargin, 
    elasticity: state.pageOneInput.elasticity, 
    taxToConsumer: state.pageOneInput.taxToConsumer, 
    emissionsKnown: state.pageOneInput.emissionsKnown,
    S1emissions: state.pageOneInput.S1emissions, 
    S1reductionTarget: state.pageOneInput.S1reductionTarget, 
    S2emissions: state.pageOneInput.S2emissions, 
    S2reductionTarget: state.pageOneInput.S2reductionTarget, 
    S3emissions: state.pageOneInput.S3emissions, 
    S3reductionTarget: state.pageOneInput.S3reductionTarget, 
})

export default connect(mapStateToProps, { updateInput })(OptionsContainer)