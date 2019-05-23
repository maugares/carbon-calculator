import React from 'react'
import { Tooltip, Icon } from 'antd'
import { labels } from '../Utils/TooltipMessages'

export default function TextWithTooltip(props) {
    const input = labels[props.topic]

    if (input) {
        switch (input.position) {
            case 'right':
                return (
                    <div className="label">
                        <b className="tooltip-text">{input.text}</b>
                        <div className="tooltip-icon">
                            <Tooltip placement="rightTop" title={input.message} >
                                <Icon type="info-circle" className="tooltip-icon" />
                            </Tooltip>
                        </div>
                    </div>
                )

            case 'left':
                return (
                    <div className="label-scope">
                        <div className="tooltip-icon">
                            <Tooltip placement="rightTop" title={input.message} className="tooltip-icon">
                                <Icon type="info-circle" />
                            </Tooltip>
                        </div>
                        <b>{input.text}</b>
                    </div>
                )

            case 'box':
                return (
                    <div className='infoStyle'>
                        <Tooltip placement="topLeft" title={input.message}>
                            <Icon type="info-circle" />
                        </Tooltip>
                    </div>
                )

            case 'reduction':
                return (
                    <div className="label-reduction">
                        <div className="tooltip-reduction"><b>{input.text}</b></div>
                        <div className="tooltip-icon">
                            <Tooltip placement="rightTop" title={input.message} >
                                <Icon type="info-circle" />
                            </Tooltip>
                        </div>
                    </div>
                )

            case 'graph':
                return (
                    <div className="label-graph">
                        <div className="tooltip-chart"><h3>{input.text}</h3></div>
                        <div className="tooltip-icon">
                            <Tooltip placement="rightTop" title={input.message} >
                                <Icon type="info-circle"/>
                            </Tooltip>
                        </div>
                    </div>
                )

            default:
                console.error('Wrong position given.')
        }
    } else {
        return 'input undefined'
    }
}
