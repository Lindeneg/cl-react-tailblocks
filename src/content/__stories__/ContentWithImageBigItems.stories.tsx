import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_DATA_BIG_IMAGE_ENTRIES } from "./mock-data";
import {
  ContentWithImageBigItems,
  ContentWithImageBigItemsProps,
} from "../ContentWithImageBigItems";

export default {
  title: "Content/WithImage",
  component: ContentWithImageBigItems,
  argTypes: {
    theme: {
      control: {
        title: "theme",
        data: ["light", "dark"],
        defaultValue: "light",
      },
    },
  },
} as Meta;

const MetaComp: Story<ContentWithImageBigItemsProps> = (args) => (
  <ContentWithImageBigItems {...args} />
);

export const BigItems = MetaComp.bind({});
BigItems.args = {
  data: MOCK_DATA_BIG_IMAGE_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "light",
  color: "indigo",
};
