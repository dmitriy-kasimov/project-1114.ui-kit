import { ButtonHTMLAttributes, ReactNode } from 'react'
import { TIndent } from 'types/TIndent'
import { TBorder } from 'types/TBorder'

export type TButtonVariant = 'primary' | 'outline' | 'clear'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode

    disabled?: boolean
    variant?: TButtonVariant
    fullWidth?: boolean
    className?: string
    addonLeft?: ReactNode
    addonRight?: ReactNode

    paddingV?: TIndent
    paddingH?: TIndent
    borderRadius?: TBorder
    gap?: TIndent
}

export const mapVPaddings: Record<TIndent, string> = {
    '0': 'vertical-padding-0',
    xxs: 'vertical-padding-xxs',
    xs: 'vertical-padding-xs',
    s: 'vertical-padding-s',
    m: 'vertical-padding-m',
    l: 'vertical-padding-l',
    xl: 'vertical-padding-xl'
}

export const mapHPaddings: Record<TIndent, string> = {
    '0': 'horizontal-padding-0',
    xxs: 'horizontal-padding-xxs',
    xs: 'horizontal-padding-xs',
    s: 'horizontal-padding-s',
    m: 'horizontal-padding-m',
    l: 'horizontal-padding-l',
    xl: 'horizontal-padding-xl'
}

export const mapBorderRadius: Record<TBorder, string> = {
    '0': 'border-radius-0',
    xxs: 'border-radius-xxs',
    xs: 'border-radius-xs',
    s: 'border-radius-s',
    m: 'border-radius-m',
    l: 'border-radius-l',
    xl: 'border-radius-xl'
}
