import { HTMLAttributes, ReactNode } from 'react'
import { TIndent } from 'types/TIndent'

export type TCardVariant = 'filled' | 'outlined'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode

    variant?: TCardVariant
    padding?: TIndent

    fullWidth?: boolean
    fullHeight?: boolean
}

export const mapPadding: Record<TIndent, string> = {
    '0': 'padding_0',
    xxs: 'padding_xxs',
    xs: 'padding_xs',
    s: 'padding_s',
    m: 'padding_m',
    l: 'padding_l',
    xl: 'padding_xl'
}
