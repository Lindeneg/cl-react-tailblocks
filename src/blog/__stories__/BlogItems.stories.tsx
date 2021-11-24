import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES } from "./mock-data";
import { BlogItems, BlogItemsProps } from "../BlogItems";

export default {
  title: "Blog/Default",
  component: BlogItems,
  argTypes: {}
} as Meta;

const MetaComp: Story<BlogItemsProps> = (args) => <BlogItems {...args} />;

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
