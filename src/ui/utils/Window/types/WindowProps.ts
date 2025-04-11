import { ReactElement } from 'react'
import { ModalProps } from 'ui/utils/Modal/types/ModalProps'

export type JustifyContent = 'start' | 'center' | 'end' | 'between'
export type AlignContent = 'start' | 'center' | 'end' | 'stretch'

export interface WindowProps {
    isOpen?: boolean
    onClose?: () => void
    content?: ReactElement
    sidebar?: ReactElement

    fullscreen?: boolean
    closable?: boolean
    lazy?: boolean

    justifyContent?: JustifyContent
    alignContent?: AlignContent
    className?: string
    portalElement?: HTMLElement

    minContentWidth?: string
    maxContentWidth?: string
    minContentHeight?: string
    maxContentHeight?: string

    blur?: boolean
}

export interface IWindowProps extends ModalProps {
    sidebar?: ReactElement
}
