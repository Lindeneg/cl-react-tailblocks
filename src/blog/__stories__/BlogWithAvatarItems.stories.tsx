import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES_WITH_AVATAR } from "./mock-data";
import {
  BlogWithAvatarItems,
  BlogWithAvatarItemsProps,
} from "../BlogWithAvatarItems";

export default {
  title: "Blog/BlogWithAvatarItems",
  component: BlogWithAvatarItems,
} as Meta;

const MetaComp: Story<BlogWithAvatarItemsProps> = (args) => (
  <BlogWithAvatarItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_ENTRIES_WITH_AVATAR.map((e) => ({
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
  data: MOCK_ENTRIES_WITH_AVATAR.map((e) => ({
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
