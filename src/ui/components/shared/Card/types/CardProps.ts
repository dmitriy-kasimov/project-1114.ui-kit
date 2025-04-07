import { HTMLAttributes, ReactNode } from 'react'

export type TCardVariant = 'filled' | 'outlined'
export type TCardPadding = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode

    variant?: TCardVariant
    padding?: TCardPadding

    fullWidth?: boolean
    fullHeight?: boolean
}
