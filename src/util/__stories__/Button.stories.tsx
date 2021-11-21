import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../Button";

export default {
  title: "Util/Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = MetaComp.bind({});
Default.args = {
  text: "Button",
  overrideClass: "",
  extendClass: "",
};
