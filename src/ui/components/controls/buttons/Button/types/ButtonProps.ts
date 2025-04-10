import { ButtonHTMLAttributes, ReactNode } from 'react'

export type TButtonVariant = 'primary' | 'outline' | 'clear'
export type TButtonPadding = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
export type TButtonBorderRadius = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
export type TButtonGap = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode

    disabled?: boolean
    variant?: TButtonVariant
    fullWidth?: boolean
    className?: string
    addonLeft?: ReactNode
    addonRight?: ReactNode

    paddingV?: TButtonPadding
    paddingH?: TButtonPadding
    borderRadius?: TButtonBorderRadius
    gap?: TButtonGap
}

export const mapVPaddings: Record<TButtonPadding, string> = {
    '0': 'vertical-padding-0',
    xxs: 'vertical-padding-xxs',
    xs: 'vertical-padding-xs',
    s: 'vertical-padding-s',
    m: 'vertical-padding-m',
    l: 'vertical-padding-l',
    xl: 'vertical-padding-xl'
}

export const mapHPaddings: Record<TButtonPadding, string> = {
    '0': 'horizontal-padding-0',
    xxs: 'horizontal-padding-xxs',
    xs: 'horizontal-padding-xs',
    s: 'horizontal-padding-s',
    m: 'horizontal-padding-m',
    l: 'horizontal-padding-l',
    xl: 'horizontal-padding-xl'
}

export const mapBorderRadius: Record<TButtonBorderRadius, string> = {
    '0': 'border-radius-0',
    xxs: 'border-radius-xxs',
    xs: 'border-radius-xs',
    s: 'border-radius-s',
    m: 'border-radius-m',
    l: 'border-radius-l',
    xl: 'border-radius-xl'
}
