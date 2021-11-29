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
    extendClass: { control: "none" },
  },
} as Meta;

const MetaComp: Story<BlogItemProps> = (args) => <BlogItem {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_ENTRY,
};
