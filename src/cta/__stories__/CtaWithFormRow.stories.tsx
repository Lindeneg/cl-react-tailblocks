import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { CtaWithFormRow, CtaWithFormRowProps } from "../CtaWithFormRow";

export default {
  title: "Cta/CtaWithFormRow",
  component: CtaWithFormRow,
  argTypes: {
    onSubmit: { control: "onSubmit" },
    inputTopProps: { control: "none" },
    inputBottomProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<CtaWithFormRowProps> = (args) => (
  <CtaWithFormRow {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  title: "Slow-carb next level shoindcgoitch ethical authentic, poko scenester",
  description:
    "Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.",
  formHeader: "Sign Up",
  bottomText: "Literally you probably haven't heard of them jean shorts.",
  onSubmit: (_, topValue, bottomValue) => {
    action("onSubmit")(topValue, bottomValue);
  },
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  title: "Slow-carb next level shoindcgoitch ethical authentic, poko scenester",
  description:
    "Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.",
  formHeader: "Sign Up",
  bottomText: "Literally you probably haven't heard of them jean shorts.",
  onSubmit: (_, topValue, bottomValue) => {
    action("onSubmit")({ topValue, bottomValue });
  },
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
