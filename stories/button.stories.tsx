import { Meta, StoryObj } from "@storybook/react";

import {
  Apple,
  Apple2,
  AppleGray,
  Dribbble,
  DribbbleCircle,
  DribbbleCircleGray,
  Facebook,
  Facebook2,
  FacebookGray,
  FigmaGray,
  Google,
  GoogleGray,
  Twitter,
  Twitter2,
  TwitterGray,
  Dot,
  Plus,
  Figma,
} from "@/components/icons";
import { Button } from "@/components/ui";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    visual: {
      control: false,
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["filled", "light", "outlined", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
  args: {
    disabled: false,
    children: "Button",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-10408&mode=design&t=Ea0S9qYy4iyxSyMa-4",
      },
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-14104&mode=design&t=Ea0S9qYy4iyxSyMa-4",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "ghost", "link"],
    },
  },
};

export const Error: Story = {
  args: {
    visual: "error",
  },
  argTypes: {},
};

export const Gray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
};

export const LeftIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const LeftIconError: Story = {
  args: {
    visual: "error",
  },
  argTypes: {},
  render: (args) => (
    <Button {...args} leftIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const LeftIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const RightIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const RightIconError: Story = {
  args: {
    visual: "error",
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const RightIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus />}>
      Button
    </Button>
  ),
};

export const DotIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot />}>
      Button
    </Button>
  ),
};

export const DotIconError: Story = {
  args: {
    visual: "error",
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot />}>
      Button
    </Button>
  ),
};

export const DotIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot />}>
      Button
    </Button>
  ),
};

export const GoogleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<Google />}
    >
      Sign in with Google
    </Button>
  ),
};

export const FacebookOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: true,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<Facebook2 />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<Apple2 />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const TwitterOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<Twitter2 />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const FigmaOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<Figma />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const DribbbleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<DribbbleCircle />}
    >
      Sign in with Dribbble
    </Button>
  ),
};

export const FacebookFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 bg-[#1877F2] hover:bg-[#0C63D4] focus:ring-gray-100"
      leftIcon={<Facebook />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 bg-black hover:bg-black focus:ring-gray-100"
      leftIcon={<Apple />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const TwitterFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 bg-[#1DA1F2] hover:bg-[#0C8BD9] focus:ring-gray-100"
      leftIcon={<Twitter />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const FigmaFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 bg-black hover:bg-black focus:ring-gray-100"
      leftIcon={<Figma />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const DribbbleFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 bg-[#EA4C89] hover:bg-[#E62872] focus:ring-gray-100"
      leftIcon={<Dribbble />}
    >
      Sign in with Dribbble
    </Button>
  ),
};

export const GoogleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<GoogleGray />}
    >
      Sign in with Google
    </Button>
  ),
};

export const FacebookGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: true,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<FacebookGray />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<AppleGray />}
    >
      Sign in with Apple
    </Button>
  ),
};

export const TwitterGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<TwitterGray />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const FigmaGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<FigmaGray />}
    >
      Sign in with Figma
    </Button>
  ),
};

export const DribbbleCircleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
      leftIcon={<DribbbleCircleGray />}
    >
      Sign in with Dribbble
    </Button>
  ),
};

export const GoogleIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <Google />
    </Button>
  ),
};

export const FacebookIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <Facebook2 />
    </Button>
  ),
};

export const AppleIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <Apple2 />
    </Button>
  ),
};

export const TwitterIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <Twitter2 />
    </Button>
  ),
};

export const FigmaIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <Figma />
    </Button>
  ),
};

export const DribbbleCircleIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <DribbbleCircle />
    </Button>
  ),
};

export const FacebookIconFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#1877F2] px-2.5 hover:bg-[#0C63D4] focus:ring-gray-100"
    >
      <Facebook />
    </Button>
  ),
};

export const AppleIconFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-black px-2.5 hover:bg-black focus:ring-gray-100"
    >
      <Apple />
    </Button>
  ),
};

export const TwitterIconFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#1DA1F2] px-2.5 hover:bg-[#0C8BD9] focus:ring-gray-100"
    >
      <Twitter />
    </Button>
  ),
};

export const FigmaIconFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-black px-2.5 hover:bg-black focus:ring-gray-100"
    >
      <Figma />
    </Button>
  ),
};

export const DribbbleIconFilled: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#EA4C89] px-2.5 hover:bg-[#E62872] focus:ring-gray-100"
    >
      <Dribbble />
    </Button>
  ),
};

export const GoogleGrayIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <GoogleGray />
    </Button>
  ),
};

export const FacebookGrayIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: true,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <FacebookGray />
    </Button>
  ),
};

export const AppleGrayIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <AppleGray />
    </Button>
  ),
};

export const TwitterGrayIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <TwitterGray />
    </Button>
  ),
};

export const FigmaGrayIconOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <FigmaGray />
    </Button>
  ),
};

export const DribbbleCircleIconGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="px-2.5 text-gray-700 focus:ring-gray-100"
      visual="gray"
      variant="outlined"
    >
      <DribbbleCircleGray />
    </Button>
  ),
};
