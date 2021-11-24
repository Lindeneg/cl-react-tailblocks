import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY_WITH_AVATAR } from "./mock-data";
import {
  BlogWithAvatarItem,
  BlogWithAvatarItemProps,
} from "../BlogWithAvatarItem";

export default {
  title: "Blog/WithAvatar",
  component: BlogWithAvatarItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    imgAlt: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithAvatarItemProps> = (args) => (
  <BlogWithAvatarItem {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_ENTRY_WITH_AVATAR,
};
