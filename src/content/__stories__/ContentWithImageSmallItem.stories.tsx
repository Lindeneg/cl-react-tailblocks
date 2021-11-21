import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_SMALL_IMAGE_ENTRY } from "./mock-data";
import {
  ContentWithImageSmallItem,
  ContentWithImageSmallItemProps,
} from "../ContentWithImageSmallItem";

export default {
  title: "Content/ContentWithImageSmallItem",
  component: ContentWithImageSmallItem,
} as Meta;

const MetaComp: Story<ContentWithImageSmallItemProps> = (args) => (
  <ContentWithImageSmallItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_SMALL_IMAGE_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_SMALL_IMAGE_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
