import React from 'react'
import { ElementType, ReactNode } from 'react'
import cls from './styles/Text.module.scss'
import {
    TAvailableSectionTypes,
    TTextAlign,
    TTextColor,
    TTextSize,
    TTextWeight,
    TWhiteSpace
} from '../model/types'
import { classNames } from 'lib/classNames/classNames'
import { mappedTextWeights } from '../const/mappedTextWeights'

type TextProps<T> = {
    size?: TTextSize
    color?: TTextColor
    align?: TTextAlign
    weight?: TTextWeight

    bold?: boolean
    whiteSpace?: TWhiteSpace

    className?: string

    children: ReactNode

    as?: T
}

export const Text = <T extends ElementType>(
    props: TextProps<T extends TAvailableSectionTypes ? T : 'span'>
) => {
    const {
        color = 'secondary',
        size = 'm',
        align = 'left',
        weight = '400',
        className = '',
        whiteSpace = 'wrap',
        children,
        as
    } = props

    const Tag = as || 'span'
    return (
        <Tag
            className={classNames(cls.Text, {}, [
                cls[size],
                cls[color],
                cls[align],
                cls[mappedTextWeights[weight]],
                cls[whiteSpace],
                className
            ])}
        >
            {children}
        </Tag>
    )
}
