import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY_WITH_AVATAR } from "../../blog/__stories__/mock-data";
import { Avatar, AvatarProps } from "../Avatar";

export default {
  title: "Util/Avatar",
  component: Avatar,
  argTypes: {
    imgNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  ...MOCK_ENTRY_WITH_AVATAR,
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  ...MOCK_ENTRY_WITH_AVATAR,
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
