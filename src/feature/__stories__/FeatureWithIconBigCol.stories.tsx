import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureWithIconBigCol,
  FeatureWithIconBigColProps,
} from "../FeatureWithIconBigCol";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureWithIconBigCol",
  component: FeatureWithIconBigCol,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithIconBigColProps> = (args) => (
  <FeatureWithIconBigCol {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onLearnMore")(e);
    },
  })),
  buttonText: "Button",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onLearnMore")(e);
    },
  })),
  buttonText: "Button",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
