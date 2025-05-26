import React from 'react'
import { Fragment } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'lib/classNames/classNames'
import { mapDirectionClass } from '../../../styles/consts'
import popupCls from '../../../styles/popup.module.scss'
import { Button } from 'ui/components/controls/buttons/Button'
import { ListBoxProps } from '../types/ListBoxProps'
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg'
import { Icon } from 'ui/components/shared/Icon'

export function ListBox<T = string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        onChange,
        defaultValue,
        value,
        readonly = false,
        direction = 'bottom right'
    } = props

    const optionsClasses = [mapDirectionClass[direction]]

    const selectedItem = items?.find(item => item.value === value)

    const defaultItem = items?.find(item => item.value === defaultValue)

    console.log(`[PLATFORM] | [ui-kit] | selectedItem.value = ${selectedItem?.value}`)
    console.log(`[PLATFORM] | [ui-kit] | getDefaultValue.value = ${defaultItem?.value}`)

    return (
        <HListBox
            disabled={readonly}
            as='div'
            className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button
                as={Button}
                addonRight={<Icon Svg={ArrowBottom} width={32} height={32} />}
                paddingV={'xs'}
            >
                {selectedItem?.content || defaultItem?.content}
            </HListBox.Button>
            <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                {items?.map((item, index) => (
                    <HListBox.Option
                        key={index}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [popupCls.active]: active ?? false,
                                        [popupCls.disabled]: item.disabled ?? false
                                    },
                                    []
                                )}
                            >
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    )
}
