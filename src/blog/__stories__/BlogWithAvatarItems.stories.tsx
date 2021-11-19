import { Story, Meta } from "@storybook/react/types-6-0";
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
  data: MOCK_ENTRIES_WITH_AVATAR,
  theme: "light",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_ENTRIES_WITH_AVATAR,
  theme: "dark",
};
