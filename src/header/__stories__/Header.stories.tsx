import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "../Header";

export default {
  title: "Header/Header",
  component: Header,
  argTypes: {
    linkNode: { control: "none" },
    onClick: { control: "none" },
    buttonNode: { control: "none" },
    spanClass: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeaderProps> = (args) => <Header {...args} />;

const props: HeaderProps = {
  links: [
    { label: "First Link" },
    { label: "Second Link" },
    { label: "Third Link" },
    { label: "Fourth Link" },
  ],
  name: "Tailblocks",
  buttonText: "Button",
  orientation: "right",
  color: "indigo",
  theme: "light",
};

export const RightLight = MetaComp.bind({});
RightLight.args = {
  ...props,
};

export const RightDark = MetaComp.bind({});
RightDark.args = {
  ...props,
  theme: "dark",
};
RightDark.parameters = {
  backgrounds: { default: "dark" },
};

export const LeftLight = MetaComp.bind({});
LeftLight.args = {
  ...props,
  orientation: "left",
};

export const LeftDark = MetaComp.bind({});
LeftDark.args = {
  ...props,
  orientation: "left",
  theme: "dark",
};
LeftDark.parameters = {
  backgrounds: { default: "dark" },
};

export const MiddleLight = MetaComp.bind({});
MiddleLight.args = {
  ...props,
  orientation: "middle",
};

export const MiddleDark = MetaComp.bind({});
MiddleDark.args = {
  ...props,
  orientation: "middle",
  theme: "dark",
};
MiddleDark.parameters = {
  backgrounds: { default: "dark" },
};

export const SwapLight = MetaComp.bind({});
SwapLight.args = {
  ...props,
  orientation: "swap",
};

export const SwapDark = MetaComp.bind({});
SwapDark.args = {
  ...props,
  orientation: "swap",
  theme: "dark",
};
SwapDark.parameters = {
  backgrounds: { default: "dark" },
};
