import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES_WITH_DATE } from "./mock-data";
import {
  BlogWithDateItems,
  BlogWithDateItemsProps,
} from "../BlogWithDateItems";

export default {
  title: "Blog/BlogWithDateItems",
  component: BlogWithDateItems,
  argTypes: {},
} as Meta;

const MetaComp: Story<BlogWithDateItemsProps> = (args) => (
  <BlogWithDateItems {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_ENTRIES_WITH_DATE.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
