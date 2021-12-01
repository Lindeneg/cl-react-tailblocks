import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_ICON_ENTRY } from "./mock-data";
import {
  ContentWithIconItem,
  ContentWithIconItemProps,
} from "../ContentWithIconItem";

export default {
  title: "Content/ContentWithIconItem",
  component: ContentWithIconItem,
  argTypes: {
    theme: { control: "none" },
    linkNode: { control: "none" },
    iconNode: { control: "none" },
    svgNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithIconItemProps> = (args) => (
  <ContentWithIconItem {...args} />
);

export const ItemLight = MetaComp.bind({});
ItemLight.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_DATA_ICON_ENTRY,
} as ContentWithIconItemProps;

export const ItemDark = MetaComp.bind({});
ItemDark.args = {
  theme: "dark",
  color: "indigo",
  ...MOCK_DATA_ICON_ENTRY,
} as ContentWithIconItemProps;
ItemDark.parameters = {
  backgrounds: { default: "dark" },
};
