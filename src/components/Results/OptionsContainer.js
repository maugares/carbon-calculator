import React, { Component } from 'react'
import OptionsPanel from './OptionsPanel'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/input'

class OptionsContainer extends Component {
    onChange = (data, target) => {
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
    taxToCustomer: state.pageOneInput.taxToCustomer, 
    emissionsKnown: state.pageOneInput.emissionsKnown,
    S1emissions: state.pageTwoInput.S1emissions, 
    S1reductionTarget: state.pageTwoInput.S1reductionTarget, 
    S2emissions: state.pageTwoInput.S2emissions, 
    S2reductionTarget: state.pageTwoInput.S2reductionTarget, 
    S3emissions: state.pageTwoInput.S3emissions, 
    S3reductionTarget: state.pageTwoInput.S3reductionTarget, 
})

export default connect(mapStateToProps, { updateInput })(OptionsContainer)