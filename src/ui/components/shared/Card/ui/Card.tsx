import React from 'react'

import { memo } from 'react'
import { Mods, classNames } from 'lib/classNames/classNames'
import cls from './Card.module.scss'
import { CardProps, TCardPadding } from '../types/CardProps'

const mapPadding: Record<TCardPadding, string> = {
    '0': 'padding_0',
    xxs: 'padding_xxs',
    xs: 'padding_xs',
    s: 'padding_s',
    m: 'padding_m',
    l: 'padding_l',
    xl: 'padding_xl'
}

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
