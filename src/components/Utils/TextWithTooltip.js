import React from 'react'
import { Tooltip, Icon } from 'antd'
import { labels } from '../Utils/TooltipMessages'

export default function TextWithTooltip(props) {
    const input = labels[props.topic]
    return (
        <div className="label">
            <b>{input.text}</b>
            <Tooltip placement="rightTop" title={input.text}>
                <Icon type="info-circle" />
            </Tooltip>
        </div>
    )
}
