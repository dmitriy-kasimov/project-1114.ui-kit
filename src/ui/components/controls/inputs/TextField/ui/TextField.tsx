import React, { FC, ForwardedRef, forwardRef } from 'react'

import cls from './TextField.module.scss'
import { TextFieldProps } from '../model/types/index'
import { Mods, classNames } from 'lib/classNames/classNames'
import { HStack, VStack } from 'ui/components/shared/Stack'
import { Text } from 'ui/components/shared/Text'

export const TextField: FC<TextFieldProps> = forwardRef(
    (props, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            value,
            onChange,

            placeholder,

            disabled = false,
            readOnly = false,
            addonLeft,
            addonRight,

            className,
            fullWidth = false,
            validationMessage,
            ...otherProps
        } = props

        const mods: Mods = {
            [cls.fullWidth!]: fullWidth,
            [cls.disabled!]: disabled,
            [cls.readonly!]: readOnly
        }

        const textField = (
            <HStack gap={'xs'} className={classNames(cls.wrapper, mods, [className])}>
                {addonLeft}
                <input
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    className={cls.input}
                    placeholder={placeholder}
                    ref={ref}
                    {...otherProps}
                />
                {addonRight}
            </HStack>
        )

        if (validationMessage)
            return (
                <VStack gap={'xxs'} className={classNames('', { [cls.fullWidth!]: fullWidth }, [])}>
                    {textField}
                    <Text size={'s'} color={'error'} whiteSpace={'wrap'}>
                        {validationMessage}
                    </Text>
                </VStack>
            )

        return textField
    }
)
