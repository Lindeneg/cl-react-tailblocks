import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_ENTRIES_WITH_AVATAR } from "./mock-data";
import {
  BlogWithAvatarItems,
  BlogWithAvatarItemsProps,
} from "../BlogWithAvatarItems";

export default {
  title: "Blog/WithAvatar",
  component: BlogWithAvatarItems,
  argTypes: {}
} as Meta;

const MetaComp: Story<BlogWithAvatarItemsProps> = (args) => (
  <BlogWithAvatarItems {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_ENTRIES_WITH_AVATAR.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
