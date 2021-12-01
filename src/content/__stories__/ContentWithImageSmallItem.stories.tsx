import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_SMALL_IMAGE_ENTRY } from "./mock-data";
import {
  ContentWithImageSmallItem,
  ContentWithImageSmallItemProps,
} from "../ContentWithImageSmallItem";

export default {
  title: "Content/ContentWithImageSmallItem",
  component: ContentWithImageSmallItem,
  argTypes: {
    imgNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithImageSmallItemProps> = (args) => (
  <ContentWithImageSmallItem {...args} />
);

export const SmallItem = MetaComp.bind({});
SmallItem.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_DATA_SMALL_IMAGE_ENTRY,
};
