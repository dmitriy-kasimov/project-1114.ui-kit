import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Window } from './Window'
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton'
import { HStack, VStack } from 'ui/components/shared/Stack'
import { Text } from 'ui/components/shared/Text'
import { Sidebar } from 'ui/widgets/Sidebar'
import { Link } from 'ui/components/controls/links/Link'

const meta: Meta<typeof Window> = {
    title: 'utils/modal/Window',
    component: Window,
    decorators: [Story => decoratorBackground(Story)],
    parameters: {
        layout: 'fullscreen'
    },

    tags: ['autodocs'],
    argTypes: {}
}

const sidebarItems = [
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

export default meta
type Story = StoryObj<typeof Window>

export const SmallWithoutSidebar: Story = {
    args: {
        isOpen: true,

        children: (
            <VStack gap='l'>
                <Skeleton width={300} height={200} />
                <Skeleton width={300} height={200} />
            </VStack>
        )
    }
}

export const SmallWithSidebar: Story = {
    args: {
        isOpen: true,
        sidebar: <Sidebar items={sidebarItems} />,
        children: (
            <VStack gap='l'>
                <Skeleton width={300} height={200} />
                <Skeleton width={300} height={200} />
            </VStack>
        )
    }
}

export const FullscreenWithoutSidebar: Story = {
    args: {
        isOpen: true,
        fullscreen: true,
        children: (
            <VStack gap='l'>
                <HStack gap='l'>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                </HStack>

                <HStack gap='l'>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                </HStack>
            </VStack>
        )
    }
}

export const FullscreenWithSidebar: Story = {
    args: {
        isOpen: true,
        fullscreen: true,
        sidebar: <Sidebar items={sidebarItems} />,
        children: (
            <VStack gap='l'>
                <HStack gap='l'>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                </HStack>

                <HStack gap='l'>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                    <VStack gap='l'>
                        <Skeleton width={300} height={200} />
                        <Skeleton width={300} height={200} />
                    </VStack>
                </HStack>
            </VStack>
        )
    }
}
