import { InputHTMLAttributes } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface SliderProps extends HTMLInputProps {
    value: number
    onChange: (value: number) => void

    min: number
    max: number
    step: number
    showValue?: boolean

    disabled?: boolean
    className?: string

    width?: string
}
