import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_A_ENTRY } from "./mock-data";
import { ContentAItem, ContentAItemProps } from "../ContentAItem";

export default {
  title: "Content/ContentAItem",
  component: ContentAItem,
  argTypes: {
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentAItemProps> = (args) => <ContentAItem {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_A_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_A_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
