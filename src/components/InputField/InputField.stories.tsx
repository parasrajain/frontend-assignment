import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is helper text",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    clearable: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    invalid: true,
    errorMessage: "Invalid email",
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Loading Field",
    placeholder: "Wait...",
    loading: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputField label="Filled" placeholder="Enter text" variant="filled" />
      <InputField label="Outlined" placeholder="Enter text" variant="outlined" />
      <InputField label="Ghost" placeholder="Enter text" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputField label="Small" placeholder="sm size" size="sm" />
      <InputField label="Medium" placeholder="md size" size="md" />
      <InputField label="Large" placeholder="lg size" size="lg" />
    </div>
  ),
};
