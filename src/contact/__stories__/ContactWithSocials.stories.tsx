import { Story, Meta } from "@storybook/react/types-6-0";
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
  label: "Feedback",
  topDescription:
    "Post-ironic portland shabby chic echo park, banjo fashion axe",
  bottomDescription:
    "Chicharrones blog helvetica normcore iceland tousled brook viral artisan.",
  buttonLabel: "Submit",
  address:
    "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  email: "example@email.com",
  phone: "123-456-7890",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  label: "Feedback",
  topDescription:
    "Post-ironic portland shabby chic echo park, banjo fashion axe",
  bottomDescription:
    "Chicharrones blog helvetica normcore iceland tousled brook viral artisan.",
  buttonLabel: "Submit",
  address:
    "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  email: "example@email.com",
  phone: "123-456-7890",
};
