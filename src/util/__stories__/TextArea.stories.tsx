import { Story, Meta } from "@storybook/react/types-6-0";
import { TextArea, TextAreaProps } from "../Input";

export default {
  title: "Util/TextArea",
  component: TextArea,
  argTypes: {
    elementRef: { control: "none" },
  },
} as Meta;

const MetaComp: Story<TextAreaProps> = (args) => (
  <div className="relative mb-4">
    <TextArea {...args} />
  </div>
);

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  label: "Label",
  extendClass: "w-full h-32 resize-none leading-6",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  label: "Label",
  extendClass: "w-full h-32 resize-none leading-6",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
