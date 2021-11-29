import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_AVATAR_AND_IMAGE_ENTRY } from "./mock-data";
import {
  ContentWithAvatarAndImage,
  ContentWithAvatarAndImageProps,
} from "../ContentWithAvatarAndImage";

export default {
  title: "Content/ContentWithAvatarAndImage",
  component: ContentWithAvatarAndImage,
  argTypes: {
    linkNode: { control: "none" },
    iconNode: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithAvatarAndImageProps> = (args) => (
  <ContentWithAvatarAndImage {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_AVATAR_AND_IMAGE_ENTRY,
};
