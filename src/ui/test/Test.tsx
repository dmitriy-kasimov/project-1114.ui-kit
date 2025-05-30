import React from 'react'
import { Modal } from 'ui/utils/Modal'
import { VStack } from 'ui/components/shared/Stack'
import { Text } from 'ui/components/shared/Text'
import { Tooltip } from 'ui/components/shared/Tooltip'
import { Switcher } from 'ui/components/controls/inputs/Switcher'
export const Test = () => {
    return (
        <Modal isOpen={true}>
            <VStack gap={'s'}>
                <Tooltip content={<Text>Hello World!</Text>}>
                    <Text>Hover on me</Text>
                </Tooltip>
                <Switcher id={'test'} value={true} onChange={() => {}} />
                <Switcher id={'test2'} value={true} onChange={() => {}} />
            </VStack>
        </Modal>
    )
}
