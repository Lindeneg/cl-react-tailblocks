import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
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
  data: MOCK_ENTRIES_WITH_IMG.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_ENTRIES_WITH_IMG.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "dark",
  color: "indigo",
};
