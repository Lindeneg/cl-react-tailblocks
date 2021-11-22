import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { FeatureWithImage, FeatureWithImageProps } from "../FeatureWithImage";
import { MOCK_DATA_WITH_IMAGE_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureWithImage",
  component: FeatureWithImage,
} as Meta;

const MetaComp: Story<FeatureWithImageProps> = (args) => (
  <FeatureWithImage {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  imgSrc: "https://dummyimage.com/460x500",
  data: MOCK_DATA_WITH_IMAGE_ENTRIES.map((e) => ({
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
  imgSrc: "https://dummyimage.com/460x500",
  data: MOCK_DATA_WITH_IMAGE_ENTRIES.map((e) => ({
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
