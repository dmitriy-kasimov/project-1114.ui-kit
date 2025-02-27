import { RadioGroupOptionType } from '../components/RadioGroupOption/types/RadioGroupOptionProps'

export interface RadioGroupProps<T extends string | number> {
    name: string
    onChange: (value: string) => void
    options: RadioGroupOptionType<T>[]

    disabled?: boolean
    className?: string
}
