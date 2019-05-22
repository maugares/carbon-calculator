import React from 'react'
import { Tooltip, Icon } from 'antd'
import { labels } from '../Utils/TooltipMessages'

export default function TextWithTooltip(props) {
    const input = labels[props.topic]

    switch (input.position) {
        case 'right':
            return (
                <div className="label">
                    <b>{input.text}</b>
                    <Tooltip placement="rightTop" title={input.message}>
                        <Icon type="info-circle" />
                    </Tooltip>
                </div>
            )

        case 'left':
            return (
                <div className="label">
                    <Tooltip placement="rightTop" title={input.message}>
                        <Icon type="info-circle" />
                    </Tooltip>
                    <b>{input.text}</b>
                </div>
            )

        case 'box':
            return (
                <Tooltip placement="topLeft" title={input.message}>
                    <Icon type="info-circle" />
                </Tooltip>
            )

        default:
            console.error('Wrong position given.')

    }
}
