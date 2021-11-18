import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY } from "./mock-data";
import {
  BlogWithImageItem,
  BlogWithImageItemProps,
} from "../BlogWithImageItem";

export default {
  title: "Blog/BlogWithImageItem",
  component: BlogWithImageItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithImageItemProps> = (args) => (
  <BlogWithImageItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_ENTRY,
  theme: "light",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_ENTRY,
  theme: "dark",
};
