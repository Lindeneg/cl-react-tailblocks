import { Story, Meta } from "@storybook/react/types-6-0";
import { Stat, StatProps } from "../Stat";

export default {
  title: "Util/Stat",
  component: Stat,
} as Meta;

const MetaComp: Story<StatProps> = (args) => <Stat {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  views: 1200,
  comments: 6,
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  views: 1200,
  comments: 6,
};
