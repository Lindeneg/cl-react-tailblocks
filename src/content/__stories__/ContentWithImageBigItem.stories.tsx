import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_BIG_IMAGE_ENTRY } from "./mock-data";
import {
  ContentWithImageBigItem,
  ContentWithImageBigItemProps,
} from "../ContentWithImageBigItem";

export default {
  title: "Content/ContentWithImageBigItem",
  component: ContentWithImageBigItem,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithImageBigItemProps> = (args) => (
  <ContentWithImageBigItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_BIG_IMAGE_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_BIG_IMAGE_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
