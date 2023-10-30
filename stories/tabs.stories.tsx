import { Meta, StoryObj } from "@storybook/react";

import { AlertCircle2, CheckCircle, AlertTriangle } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const meta: Meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=901-195787&mode=design&t=hJFLhTAwg863fHii-4",
      },
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=112-163883&mode=design&t=hJFLhTAwg863fHii-4",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList>
        <TabsTrigger value="All">All</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Folders">Folders</TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};

export const Expanded: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="All">All</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Folders">Folders</TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList>
        <TabsTrigger value="All">
          All
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
        <TabsTrigger value="Projects">
          Projects
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
        <TabsTrigger value="Folders">
          Folders
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};

export const IconsExpanded: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="All">
          All
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
        <TabsTrigger value="Projects">
          Projects
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
        <TabsTrigger value="Folders">
          Folders
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-100 text-[10px] leading-[18px] text-gray-500 group-data-[state=active]:bg-primary-50 group-data-[state=active]:text-primary-500">
            2
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};

export const ColoredIcons: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList>
        <TabsTrigger value="All">
          All
          <CheckCircle className="text-success-500" />
        </TabsTrigger>
        <TabsTrigger value="Projects">
          Projects
          <AlertTriangle className="text-warning-400" />
        </TabsTrigger>
        <TabsTrigger value="Folders">
          Folders
          <AlertCircle2 className="text-error-500" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};

export const ColoredIconsExpanded: Story = {
  render: (args) => (
    <Tabs defaultValue="All" {...args}>
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="All">
          All
          <CheckCircle className="text-success-500" />
        </TabsTrigger>
        <TabsTrigger value="Projects">
          Projects
          <AlertTriangle className="text-warning-400" />
        </TabsTrigger>
        <TabsTrigger value="Folders">
          Folders
          <AlertCircle2 className="text-error-500" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All"></TabsContent>
      <TabsContent value="Projects"></TabsContent>
      <TabsContent value="Folders"></TabsContent>
    </Tabs>
  ),
};
