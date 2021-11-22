import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY_WITH_DATE } from "./mock-data";
import { BlogWithDateItem, BlogWithDateItemProps } from "../BlogWithDateItem";

export default {
  title: "Blog/BlogWithDateItem",
  component: BlogWithDateItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithDateItemProps> = (args) => (
  <BlogWithDateItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_ENTRY_WITH_DATE,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_ENTRY_WITH_DATE,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
