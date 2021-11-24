import { Story, Meta } from "@storybook/react/types-6-0";
import { Header as C, HeaderProps } from "../Header";

export default {
  title: "Header/Header",
  component: C,
  argTypes: {
    linkNode: { control: "none" },
    onClick: { control: "none" },
    buttonNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeaderProps> = (args) => <C {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  orientation: "right",
  theme: "light",
  color: "indigo",
  links: [
    { label: "First Link" },
    { label: "Second Link" },
    { label: "Third Link" },
    { label: "Fourth Link" },
  ],
  name: "Tailblocks",
  buttonText: "Button",
};
