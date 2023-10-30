import { Meta, StoryObj } from "@storybook/react";

import {
  Apple,
  Apple2,
  AppleGray,
  Facebook,
  Facebook2,
  FacebookGray,
  Google,
  GoogleGray,
} from "@/components/icons";
import { Button, ButtonGroup } from "@/components/ui";

const meta: Meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Filled: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button
        className="gap-x-3 focus:ring-gray-100"
        leftIcon={<Google />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Google
      </Button>
      <Button
        className="gap-x-3 bg-[#1877F2] hover:bg-[#0C63D4] focus:ring-gray-100"
        leftIcon={<Facebook />}
        size="md"
      >
        Sign in with Facebook
      </Button>
      <Button
        className="gap-x-3 bg-black hover:bg-black focus:ring-gray-100"
        leftIcon={<Apple />}
        size="md"
      >
        Sign in with Twitter
      </Button>
    </ButtonGroup>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button
        className="gap-x-3 focus:ring-gray-100"
        leftIcon={<Google />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Google
      </Button>
      <Button
        className="gap-x-3 focus:ring-gray-100"
        leftIcon={<Facebook2 />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Facebook
      </Button>
      <Button
        className="gap-x-3 focus:ring-gray-100"
        leftIcon={<Apple2 />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Twitter
      </Button>
    </ButtonGroup>
  ),
};

export const GrayOutlined: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button
        className="gap-x-3 text-gray-700 focus:ring-gray-100"
        leftIcon={<GoogleGray />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Google
      </Button>
      <Button
        className="gap-x-3 text-gray-700 focus:ring-gray-100"
        leftIcon={<FacebookGray />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Facebook
      </Button>
      <Button
        className="gap-x-3 text-gray-700 focus:ring-gray-100"
        leftIcon={<AppleGray />}
        size="md"
        variant="outlined"
        visual="gray"
      >
        Sign in with Apple
      </Button>
    </ButtonGroup>
  ),
};

export const IconFilled: Story = {
  render: (args) => (
    <ButtonGroup className="grid grid-cols-3" {...args}>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <Google />
      </Button>

      <Button
        className="bg-[#1877F2] px-2.5 hover:bg-[#0C63D4] focus:ring-gray-100"
        size="md"
      >
        <Facebook />
      </Button>

      <Button
        className="bg-black px-2.5 hover:bg-black focus:ring-gray-100"
        size="md"
      >
        <Apple />
      </Button>
    </ButtonGroup>
  ),
};

export const IconOutlined: Story = {
  render: (args) => (
    <ButtonGroup className="grid grid-cols-3" {...args}>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <Google />
      </Button>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <Facebook2 />
      </Button>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <Apple2 />
      </Button>
    </ButtonGroup>
  ),
};

export const GrayIconOutlined: Story = {
  render: (args) => (
    <ButtonGroup className="grid grid-cols-3" {...args}>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <GoogleGray />
      </Button>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <FacebookGray />
      </Button>
      <Button
        className="px-2.5 text-gray-700 focus:ring-gray-100"
        size="md"
        variant="outlined"
        visual="gray"
      >
        <AppleGray />
      </Button>
    </ButtonGroup>
  ),
};
