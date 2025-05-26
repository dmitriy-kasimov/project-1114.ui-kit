import { DropdownDirection } from '../../../types/ui'
import { ReactNode } from 'react'

export interface ListBoxItem<T = string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

export interface ListBoxProps<T = string> {
    items?: ListBoxItem<T>[]
    className?: string
    value?: T | null
    defaultValue?: T | null
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
}
