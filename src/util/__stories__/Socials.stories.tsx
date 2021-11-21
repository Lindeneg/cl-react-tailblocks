import { Story, Meta } from "@storybook/react/types-6-0";
import { Socials, SocialsProps } from "../Socials";

export default {
  title: "Util/Socials",
  component: Socials,
} as Meta;

const MetaComp: Story<SocialsProps> = (args) => <Socials {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  className: "flex",
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  //linkedIn: "",
  mail: "example@example.com",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  className: "flex",
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  //linkedIn: "",
  mail: "example@example.com",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
