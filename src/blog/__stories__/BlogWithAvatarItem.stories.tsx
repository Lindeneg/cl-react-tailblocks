import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY } from "./mock-data";
import {
  BlogWithAvatarItem,
  BlogWithAvatarItemProps,
} from "../BlogWithAvatarItem";

export default {
  title: "Blog/BlogWithAvatarItem",
  component: BlogWithAvatarItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithAvatarItemProps> = (args) => (
  <BlogWithAvatarItem {...args} />
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
