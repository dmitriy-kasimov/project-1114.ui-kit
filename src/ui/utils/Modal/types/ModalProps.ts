export interface ModalProps {
    className?: string
    children?: React.ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
    portalElement?: HTMLElement
    closable?: boolean
    fullscreen?: boolean
    padding?: TModalContentPadding
}

type TModalContentPadding = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
export const mapContentPadding: Record<TModalContentPadding, string> = {
    '0': 'padding-0',
    xxs: 'padding-xxs',
    xs: 'padding-xs',
    s: 'padding-s',
    m: 'padding-m',
    l: 'padding-l',
    xl: 'padding-xl'
}
