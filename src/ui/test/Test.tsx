import React, { useState } from 'react'
import { Modal } from 'ui/utils/Modal'
import { HStack, VStack } from 'ui/components/shared/Stack'
import { Text } from 'ui/components/shared/Text'
import { Tooltip } from 'ui/components/shared/Tooltip'
import { Switcher } from 'ui/components/controls/inputs/Switcher'
import { ListBox, ListBoxItem } from 'ui/components/controls/popups'
import { Skeleton } from 'ui/components/shared/Skeleton'

const listBoxItems: ListBoxItem<string>[] = [
    {
        content: (
            <HStack gap='s'>
                <Skeleton height={30} width={30} border='50%' />
                <Tooltip content={<Text>Hello World!</Text>}>
                    <Text>Hover on me</Text>
                </Tooltip>
            </HStack>
        ),
        value: 'M1RoN'
    },
    {
        content: (
            <HStack gap='s'>
                <Skeleton height={30} width={30} border='50%' />
                <Tooltip content={<Text>Hello World!</Text>}>
                    <Text>Hover on me</Text>
                </Tooltip>
            </HStack>
        ),
        value: 'Alan_Masti'
    }
]
export const Test = () => {
    const [listBoxValue, setListBoxValue] = useState('Alan_Masti')

    return (
        <Modal isOpen={true}>
            <VStack gap={'s'}>
                <ListBox
                    value={listBoxValue}
                    onChange={setListBoxValue}
                    items={listBoxItems}
                    defaultValue='Alan_Masti'
                />
                <Switcher id={'test'} value={true} onChange={() => {}} />
                <Switcher id={'test2'} value={true} onChange={() => {}} />
            </VStack>
        </Modal>
    )
}
