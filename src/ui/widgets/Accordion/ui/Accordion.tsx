import React, { FC } from 'react'
import { classNames } from 'lib/classNames/classNames'
import { memo } from 'react'
import cls from './Accordion.module.scss'
import { AccordionProps } from '../types/AccordionProps'
import { Disclosure } from '@headlessui/react'
import { Icon } from 'ui/components/shared/Icon/Icon'
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg'
import { Button } from 'ui/components/controls/buttons/Button'

export const Accordion: FC<AccordionProps> = memo(props => {
    const { title, description, defaultOpen, disabled, className, fullWidth = false } = props
    return (
        <Disclosure
            defaultOpen={defaultOpen}
            as={'div'}
            className={classNames(cls.Accordion, { [cls.fullWidth]: fullWidth }, [className])}
        >
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as={Button}
                        disabled={disabled}
                        variant={'clear'}
                        addonRight={
                            <Icon
                                Svg={ArrowBottom}
                                className={classNames(cls.arrow, { [cls.open]: open }, [])}
                                width={32}
                                height={32}
                            />
                        }
                        fullWidth
                        paddingV={'0'}
                        paddingH={'0'}
                        className={classNames(
                            cls.Button,
                            { [cls.disabled]: disabled ?? false },
                            []
                        )}
                    >
                        {title}
                    </Disclosure.Button>
                    <Disclosure.Panel>{description}</Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
})
