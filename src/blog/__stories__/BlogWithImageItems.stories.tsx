import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRIES_WITH_IMG } from "./mock-data";
import {
  BlogWithImageItems,
  BlogWithImageItemsProps,
} from "../BlogWithImageItems";

export default {
  title: "Blog/BlogWithImageItems",
  component: BlogWithImageItems,
} as Meta;

const MetaComp: Story<BlogWithImageItemsProps> = (args) => (
  <BlogWithImageItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_ENTRIES_WITH_IMG,
  theme: "light",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_ENTRIES_WITH_IMG,
  theme: "dark",
};
