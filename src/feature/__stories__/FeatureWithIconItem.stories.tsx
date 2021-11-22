import { Story, Meta } from "@storybook/react/types-6-0";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "../FeatureWithIconItem";
import { MOCK_DATA_WITH_ICON_ENTRY } from "./mock-data";

export default {
  title: "Feature/FeatureWithIconItem",
  component: FeatureWithIconItem,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithIconItemProps> = (args) => (
  <FeatureWithIconItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_WITH_ICON_ENTRY,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_WITH_ICON_ENTRY,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
