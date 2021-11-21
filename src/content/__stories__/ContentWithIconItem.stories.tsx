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
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentWithIconItemProps> = (args) => (
  <ContentWithIconItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_ICON_ENTRY,
  theme: "light",
  color: "indigo",
} as ContentWithIconItemProps;

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_ICON_ENTRY,
  theme: "dark",
  color: "indigo",
} as ContentWithIconItemProps;
Dark.parameters = {
  backgrounds: { default: "dark" },
};
