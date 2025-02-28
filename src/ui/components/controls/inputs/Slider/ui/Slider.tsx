import React, { FC, memo } from 'react'
import cls from './Slider.module.scss'
import { Text } from 'ui/components/shared/Text'
import { SliderProps } from '../types/SliderProps'
import { classNames } from 'lib/classNames/classNames'
import { HStack } from 'ui/components/shared/Stack'

const Slider: FC<SliderProps> = memo(
    ({
        value,
        onChange,
        min,
        max,
        step,
        disabled = false,
        width = '150px',
        className = '',
        showValue = true
    }) => {
        return (
            <HStack gap='xs' className={classNames('', {}, [className])}>
                <input
                    className={classNames(cls.input)}
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    min={min}
                    max={max}
                    type='range'
                    step={step}
                    disabled={disabled}
                    style={{ width }}
                />
                {showValue ? <Text>{value}</Text> : null}
            </HStack>
        )
    }
)

export default Slider
