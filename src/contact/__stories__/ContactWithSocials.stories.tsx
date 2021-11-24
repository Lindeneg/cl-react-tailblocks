import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  ContactWithSocials,
  ContactWithSocialsProps,
} from "../ContactWithSocials";

export default {
  title: "Contact/WithSocials",
  component: ContactWithSocials,
  argTypes: {
    onSubmit: { control: "none" },
    textAreaProps: { control: "none" },
    inputRightProps: { control: "none" },
    inputLeftProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContactWithSocialsProps> = (args) => (
  <ContactWithSocials {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  label: "Contact Us",
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.",
  buttonLabel: "Submit",
  street: "49 Smith St.",
  city: "Saint Cloud, MN 56301",
  email: "example@email.com",
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  onSubmit: (_, inputRight, inputLeft, textArea) => {
    action("onSubmit")({ inputRight, inputLeft, textArea });
  },
};
