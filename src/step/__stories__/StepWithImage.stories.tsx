import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { StepWithImage, StepWithImageProps } from "../StepWithImage";
import { MOCK_STEPS } from "./mock-data";

export default {
  title: "Step/StepWithImage",
  component: StepWithImage,
  argTypes: {
    imgNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<StepWithImageProps> = (args) => (
  <StepWithImage {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  imgSrc: "https://dummyimage.com/1200x500",
  steps: MOCK_STEPS,
} as StepWithImageProps;
