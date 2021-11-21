import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES } from "./mock-data";
import { BlogItems, BlogItemsProps } from "../BlogItems";

export default {
  title: "Blog/BlogItems",
  component: BlogItems,
} as Meta;

const MetaComp: Story<BlogItemsProps> = (args) => <BlogItems {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_ENTRIES.map((e) => ({
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
  data: MOCK_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
