import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_DATA_ICON_ENTRIES } from "./mock-data";
import {
  ContentWithIconItems,
  ContentWithIconItemsProps,
} from "../ContentWithIconItems";

export default {
  title: "Content/WithIcon",
  component: ContentWithIconItems,
  argTypes: {
    onClick: { control: "none" },
    theme: {
      control: {
        title: "theme",
        data: ["light", "dark"],
        defaultValue: "light",
      },
    },
  },
} as Meta;

const MetaComp: Story<ContentWithIconItemsProps> = (args) => (
  <ContentWithIconItems {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_DATA_ICON_ENTRIES,
  buttonText: "Button",
  title: "Pitchfork Kickstarter Taxidermy",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
};
