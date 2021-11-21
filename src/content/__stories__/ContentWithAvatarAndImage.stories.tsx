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

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_AVATAR_AND_IMAGE_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_AVATAR_AND_IMAGE_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
