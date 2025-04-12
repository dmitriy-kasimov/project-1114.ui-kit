import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Sidebar } from './Sidebar'
import { Text } from 'ui/components/shared/Text'
import { Link } from 'ui/components/controls/links/Link'
import { HStack } from 'ui/components/shared/Stack'
import { Skeleton } from 'ui/components/shared/Skeleton'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [Story => decoratorBackground(Story)],
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const ModalOpen: Story = {
    args: {
        items: [
            <Link>
                <Text color={'main'}>Link1</Text>
            </Link>,
            <HStack align={'center'} gap={'s'}>
                <Skeleton width={30} height={30} border={'50%'} />
                <Link>
                    <Text color={'main'}>Link2</Text>
                </Link>
            </HStack>,

            <Text color={'main'}>Link3</Text>
        ]
    }
}
