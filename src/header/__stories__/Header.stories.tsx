import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "../Header";

export default {
  title: "Header/Header",
  component: Header,
  argTypes: {
    linkNode: { control: "none" },
    onClick: { control: "none" },
    buttonNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeaderProps> = (args) => <Header {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  links: [
    { label: "First Link" },
    { label: "Second Link" },
    { label: "Third Link" },
    { label: "Fourth Link" },
  ],
  name: "Tailblocks",
  buttonText: "Button",
  orientation: "right",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  links: [
    { label: "First Link" },
    { label: "Second Link" },
    { label: "Third Link" },
    { label: "Fourth Link" },
  ],
  name: "Tailblocks",
  buttonText: "Button",
  orientation: "right",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
