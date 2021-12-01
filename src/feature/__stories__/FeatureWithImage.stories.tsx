import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { FeatureWithImage, FeatureWithImageProps } from "../FeatureWithImage";
import { MOCK_DATA_WITH_IMAGE_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureWithImage",
  component: FeatureWithImage,
  argTypes: {
    imgNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithImageProps> = (args) => (
  <FeatureWithImage {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  imgSrc: "https://dummyimage.com/460x500",
  data: MOCK_DATA_WITH_IMAGE_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
