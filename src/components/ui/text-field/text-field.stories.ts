import {Meta} from "@storybook/react";
import {StoryObj} from "@storybook/react";
import {TextField} from "@/components/ui/text-field/text-field";

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['text', 'password', 'search','disabled','error'],
        },
    },
}satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>


export const Text: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
    },
}

export const Password: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type:'password'
    },
}

export const Search: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type:'search'
    },
}

export const Disabled: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type:'text',
        disabled:true
    },
}

export const Error: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type:'text',
        errorMessage:'ErrorMessage'
    },
}