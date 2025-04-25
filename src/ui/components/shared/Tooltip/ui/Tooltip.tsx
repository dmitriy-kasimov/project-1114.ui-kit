import React, { FC, ReactNode, useState } from 'react'
import cls from './Tooltip.module.scss'
import { classNames } from 'lib/classNames/classNames'
import { getTrigonometricQuad } from 'ui/components/shared/Tooltip/helpers/getTrigonometricQuad'

type TooltipProps = {
    children: ReactNode
    delay?: number
    content: ReactNode
    fullWidth?: boolean
}

export const Tooltip: FC<TooltipProps> = ({
    children,
    delay = 300,
    content,
    fullWidth = false
}) => {
    let timeout: ReturnType<typeof setTimeout>
    const [active, setActive] = useState(false)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    const showTip = (e: React.MouseEvent<HTMLDivElement>) => {
        const y = e.clientY
        const x = e.clientX

        timeout = setTimeout(() => {
            setActive(true)
        }, delay)

        setCursorPos({ x, y })
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    const direction = getTrigonometricQuad(cursorPos.x, cursorPos.y)

    return (
        <div
            className={classNames(cls.TooltipWrapper, { [cls.fullWidth]: fullWidth }, [])}
            onMouseEnter={e => showTip(e)}
            onMouseLeave={hideTip}
        >
            {children}
            {active && (
                <div className={classNames(cls.TooltipTip, {}, [cls[direction]])}>{content}</div>
            )}
        </div>
    )
}
