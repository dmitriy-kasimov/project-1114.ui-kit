export type RadioGroupOptionType<T extends string | number> = {
    value: T
    description: string

    disabled?: boolean
    defaultChecked?: boolean
}

export interface RadioGroupOptionProps<T extends string | number> {
    id: string
    name: string

    item: RadioGroupOptionType<T>
    onChange: (value: string) => void
}
