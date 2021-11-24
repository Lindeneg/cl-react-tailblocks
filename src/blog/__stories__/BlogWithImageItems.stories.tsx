import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES_WITH_IMG } from "./mock-data";
import {
  BlogWithImageItems,
  BlogWithImageItemsProps,
} from "../BlogWithImageItems";

export default {
  title: "Blog/WithImage",
  component: BlogWithImageItems,
  argTypes: {},
} as Meta;

const MetaComp: Story<BlogWithImageItemsProps> = (args) => (
  <BlogWithImageItems {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_ENTRIES_WITH_IMG.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
