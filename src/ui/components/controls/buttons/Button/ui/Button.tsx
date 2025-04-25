import React, { FC, ForwardedRef, forwardRef } from 'react'
import cls from './Button.module.scss'
import {
    ButtonProps,
    gapClasses,
    mapBorderRadius,
    mapHPaddings,
    mapVPaddings
} from '../types/ButtonProps'
import { Mods, classNames } from 'lib/classNames/classNames'

export const Button: FC<ButtonProps> = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        disabled = false,
        variant = 'primary',
        fullWidth = false,
        className = '',
        addonLeft,
        addonRight,
        paddingV = 's',
        paddingH = 'm',
        borderRadius = 'xs',
        gap = 'm',
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.disabled]: disabled,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
    }

    const addons = [
        cls[variant],
        cls[mapVPaddings[paddingV]],
        cls[mapHPaddings[paddingH]],
        cls[mapBorderRadius[borderRadius]],
        cls[gapClasses[gap]],
        className
    ]

    return (
        <button
            className={classNames(cls.Button, mods, addons)}
            type='button'
            {...otherProps}
            ref={ref}
        >
            {addonLeft}
            {children}
            {addonRight}
        </button>
    )
})
