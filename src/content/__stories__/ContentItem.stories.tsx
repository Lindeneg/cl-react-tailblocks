import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_PLAIN_ENTRY } from "./mock-data";
import { ContentItem, ContentItemProps } from "../ContentItem";

export default {
  title: "Content/Default",
  component: ContentItem,
  argTypes: {
    linkNode: { control: "none" },
    theme: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContentItemProps> = (args) => <ContentItem {...args} />;

export const ItemLight = MetaComp.bind({});
ItemLight.args = {
  ...MOCK_DATA_PLAIN_ENTRY,
  theme: "light",
  color: "indigo",
};

export const ItemDark = MetaComp.bind({});
ItemDark.args = {
  ...MOCK_DATA_PLAIN_ENTRY,
  theme: "dark",
  color: "indigo",
};
ItemDark.parameters = {
  backgrounds: { default: "dark" },
};
