import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_DATA_PLAIN_ENTRIES } from "./mock-data";
import { ContentItems, ContentItemsProps } from "../ContentItems";

export default {
  title: "Content/Default",
  component: ContentItems,
  argTypes: {
    onClick: { action: "onClick" },
    theme: {
      control: {
        title: "theme",
        data: ["light", "dark"],
        defaultValue: "light",
      },
    },
  },
} as Meta;

const MetaComp: Story<ContentItemsProps> = (args) => <ContentItems {...args} />;

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
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
};
