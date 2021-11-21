import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_DATA_PLAIN_ENTRIES } from "./mock-data";
import { ContentItems, ContentItemsProps } from "../ContentItems";

export default {
  title: "Content/ContentItems",
  component: ContentItems,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<ContentItemsProps> = (args) => <ContentItems {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_PLAIN_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onLearnMore")(e);
    },
  })),
  label: "ROOF PARTY POLAROID",
  title: "Master Cleanse Reliac Heirloom",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_PLAIN_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onLearnMore")(e);
    },
  })),
  label: "ROOF PARTY POLAROID",
  title: "Master Cleanse Reliac Heirloom",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};