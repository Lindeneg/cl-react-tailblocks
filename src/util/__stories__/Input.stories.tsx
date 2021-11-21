import { Story, Meta } from "@storybook/react/types-6-0";
import { Input, InputProps } from "../Input";

export default {
  title: "Util/Input",
  component: Input,
  argTypes: {
    elementRef: { control: "none" },
  },
} as Meta;

const MetaComp: Story<InputProps> = (args) => (
  <div className="relative mb-4">
    <Input {...args} />
  </div>
);

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  label: "Label",
  extendClass: "w-full leading-8",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  label: "Label",
  extendClass: "w-full leading-8",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
