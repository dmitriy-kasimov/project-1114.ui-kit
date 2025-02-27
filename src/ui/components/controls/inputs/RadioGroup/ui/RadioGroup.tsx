import React from 'react'
import { RadioGroupProps } from '../types/RadioGroupProps'
import RadioGroupOption from '../components/RadioGroupOption/RadioGroupOption'

import cls from './RadioGroup.module.scss'
import { classNames } from 'lib/classNames/classNames'
import { VStack } from 'ui/components/shared/Stack'

function RadioGroup<T extends string>(props: RadioGroupProps<T>) {
    const { onChange, options, disabled = false, className = '', name } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled
    }
    return (
        <VStack gap='s' className={classNames(cls.RadioGroup, mods, [className])}>
            {options?.map(option => (
                <RadioGroupOption<T>
                    key={option.value}
                    id={option.value}
                    item={option}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </VStack>
    )
}

export default RadioGroup
