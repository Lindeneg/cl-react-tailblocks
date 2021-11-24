import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_BIG_IMAGE_ENTRY } from "./mock-data";
import {
  ContentWithImageBigItem,
  ContentWithImageBigItemProps,
} from "../ContentWithImageBigItem";

export default {
  title: "Content/WithImage",
  component: ContentWithImageBigItem,
  argTypes: {
    theme: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithImageBigItemProps> = (args) => (
  <ContentWithImageBigItem {...args} />
);

export const BigItemLight = MetaComp.bind({});
BigItemLight.args = {
  ...MOCK_DATA_BIG_IMAGE_ENTRY,
  theme: "light",
  color: "indigo",
};

export const BigItemDark = MetaComp.bind({});
BigItemDark.args = {
  ...MOCK_DATA_BIG_IMAGE_ENTRY,
  theme: "dark",
  color: "indigo",
};
BigItemDark.parameters = {
  backgrounds: { default: "dark" },
};
