import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { MOCK_DATA_BIG_IMAGE_ENTRIES } from "./mock-data";
import {
  ContentWithImageBigItems,
  ContentWithImageBigItemsProps,
} from "../ContentWithImageBigItems";

export default {
  title: "Content/ContentWithImageBigItems",
  component: ContentWithImageBigItems,
} as Meta;

const MetaComp: Story<ContentWithImageBigItemsProps> = (args) => (
  <ContentWithImageBigItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_BIG_IMAGE_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_BIG_IMAGE_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
