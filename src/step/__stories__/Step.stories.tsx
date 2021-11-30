import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Step, StepProps } from "../Step";
import { MOCK_STEPS_WITH_LABEL } from "./mock-data";

export default {
  title: "Step/Step",
  component: Step,
  argTypes: {},
} as Meta;

const MetaComp: Story<StepProps> = (args) => <Step {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  steps: MOCK_STEPS_WITH_LABEL,
} as StepProps;
