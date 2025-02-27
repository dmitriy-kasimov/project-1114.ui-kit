export type RadioGroupOptionType<T extends string> = {
    value: T
    description: string

    disabled?: boolean
    defaultChecked?: boolean
}

export interface RadioGroupOptionProps<T extends string> {
    id: string
    name: string

    item: RadioGroupOptionType<T>
    onChange: (value: string) => void
}
