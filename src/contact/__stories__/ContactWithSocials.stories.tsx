import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  ContactWithSocials,
  ContactWithSocialsProps,
} from "../ContactWithSocials";

export default {
  title: "Contact/ContactWithSocials",
  component: ContactWithSocials,
} as Meta;

const MetaComp: Story<ContactWithSocialsProps> = (args) => (
  <ContactWithSocials {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
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

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
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
