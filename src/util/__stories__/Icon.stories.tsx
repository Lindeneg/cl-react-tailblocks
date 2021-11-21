import { Story, Meta } from "@storybook/react/types-6-0";
import { Icon, IconProps } from "../Icon";

export default {
  title: "Util/Icon",
  component: Icon,
  argTypes: {
    iconNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<IconProps> = (args) => <Icon {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  icon: "graph",
  extendDivClass: "w-10 h-10",
  extendSvgClass: "w-6 h-6",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  icon: "graph",
  extendDivClass: "w-10 h-10",
  extendSvgClass: "w-6 h-6",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
