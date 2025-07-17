import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface TextFieldProps extends HTMLInputProps {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void

    validationMessage?: string

    placeholder?: string

    disabled?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode

    className?: string
    fullWidth?: boolean
}
