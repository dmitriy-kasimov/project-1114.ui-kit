
import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof TextArea> = {
    title: 'components/controls/TextArea',
    component: TextArea,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      )
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaDefault: Story = {
    args: {
        label: 'Describe your problem',
        limit: 100,
    },
};

export const TextAreaDisabled: Story = {
  args: {
      label: 'Describe your problem',
      limit: 100,
      disabled: true
  },
};
