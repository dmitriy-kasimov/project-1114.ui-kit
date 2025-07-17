import { InputHTMLAttributes, ReactNode } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface TextFieldProps extends HTMLInputProps {
    value?: string
    onChange?: (value: string) => void

    validationMessage?: string

    placeholder?: string

    disabled?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode

    className?: string
    fullWidth?: boolean
}
