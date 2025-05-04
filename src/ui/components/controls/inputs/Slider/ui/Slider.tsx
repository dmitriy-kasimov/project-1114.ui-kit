import React, { FC, memo } from 'react'
import cls from './Slider.module.scss'
import { SliderProps } from '../types/SliderProps'
import { classNames } from 'lib/classNames/classNames'

const Slider: FC<SliderProps> = memo(
    ({ value, onChange, min, max, step, disabled = false, width = '150px', className }) => {
        return (
            <input
                className={classNames(classNames(cls.input, {}, [className]))}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                min={min}
                max={max}
                type='range'
                step={step}
                disabled={disabled}
                style={{ width }}
            />
        )
    }
)

export default Slider
