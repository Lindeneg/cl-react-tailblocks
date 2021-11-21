import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY } from "./mock-data";
import { BlogItem, BlogItemProps } from "../BlogItem";

export default {
  title: "Blog/BlogItem",
  component: BlogItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogItemProps> = (args) => <BlogItem {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};