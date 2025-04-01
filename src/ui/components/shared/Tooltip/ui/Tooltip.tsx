import React, { FC, ReactNode, useState } from 'react'
import cls from './Tooltip.module.scss'
import { classNames } from 'lib/classNames/classNames'

type TooltipProps = {
    children: ReactNode
    delay?: number
    content: ReactNode
    direction?: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip: FC<TooltipProps> = ({
    children,
    delay = 300,
    content,
    direction = 'bottom'
}) => {
    let timeout: ReturnType<typeof setTimeout>
    const [active, setActive] = useState(false)

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, delay)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    return (
        <div
            className={classNames(cls.TooltipWrapper)}
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {children}
            {active && (
                <div className={classNames(cls.TooltipTip, {}, [cls[direction]])}>
                    {/* Content */}
                    {content}
                </div>
            )}
        </div>
    )
}
