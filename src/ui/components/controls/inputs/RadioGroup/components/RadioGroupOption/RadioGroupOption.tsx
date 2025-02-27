import React from 'react'
import { RadioGroupOptionProps } from './types/RadioGroupOptionProps'
import { Text } from 'ui/components/shared/Text'

import cls from './RadioGroupOption.module.scss'
import { HStack } from 'ui/components/shared/Stack'
import { classNames } from 'lib/classNames/classNames'

function RadioGroupOption<T extends string | number>(props: RadioGroupOptionProps<T>) {
    const { item, onChange, id, name } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: item.disabled ?? false
    }

    return (
        <HStack gap='s' className={classNames(cls.RadioGroupOption, mods, [])}>
            <input
                className={cls.input}
                type='radio'
                value={item.value}
                onChange={e => onChange(e.target.value)}
                id={id}
                name={name}
                disabled={item.disabled}
                defaultChecked={item.defaultChecked}
            />
            <label htmlFor={id} className={cls.radioButton}></label>
            <label className={cls.label} htmlFor={id}>
                <Text>{item.description}</Text>
            </label>
        </HStack>
    )
}

export default RadioGroupOption
