import React from 'react'

import { memo } from 'react'
import { Mods, classNames } from 'lib/classNames/classNames'
import cls from './Card.module.scss'
import { CardProps, mapPadding } from '../types/CardProps'

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        fullWidth = false,
        fullHeight = false,
        padding = 'xs',
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.fullHeight]: fullHeight
    }
    const addons = [cls[variant], cls[mapPadding[padding]], className]

    return (
        <div className={classNames(cls.Card, mods, addons)} {...otherProps}>
            {children}
        </div>
    )
})
