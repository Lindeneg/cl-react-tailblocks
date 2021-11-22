import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { CtaWithFormCol, CtaWithFormColProps } from "../CtaWithFormCol";

export default {
  title: "Cta/CtaWithFormCol",
  component: CtaWithFormCol,
  argTypes: {
    onSubmit: { control: "onSubmit" },
    inputLeftProps: { control: "none" },
    inputRightProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<CtaWithFormColProps> = (args) => (
  <CtaWithFormCol {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  title: "Master Cleanse Reliac Heirloom",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.",
  onSubmit: (_, leftValue, rightValue) => {
    action("onSubmit")(leftValue, rightValue);
  },
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  title: "Master Cleanse Reliac Heirloom",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.",
  onSubmit: (_, leftValue, rightValue) => {
    action("onSubmit")(leftValue, rightValue);
  },
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
