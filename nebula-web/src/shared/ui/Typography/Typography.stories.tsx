import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'shared/ui/Typography',
  component: Typography,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Typography',
  },
};

export const H1: Story = {
  args: {
    children: 'Typography',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Typography',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Typography',
    variant: 'h3',
  },
};

export const Body1: Story = {
  args: {
    children: 'Typography',
    variant: 'body1',
  },
};

export const Body2: Story = {
  args: {
    children: 'Typography',
    variant: 'body2',
  },
};

export const Caption: Story = {
  args: {
    children: 'Typography',
    variant: 'caption',
  },
};
