import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  ContactWithMapSmall,
  ContactWithMapSmallProps,
} from "../ContactWithMapSmall";

export default {
  title: "Contact/ContactWithMapSmall",
  component: ContactWithMapSmall,
} as Meta;

const MetaComp: Story<ContactWithMapSmallProps> = (args) => (
  <ContactWithMapSmall {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  label: "Feedback",
  onSubmit: (_, inputTop, inputBottom, textArea) => {
    action("onSubmit")({ inputTop, inputBottom, textArea });
  },
  topDescription:
    "Post-ironic portland shabby chic echo park, banjo fashion axe",
  bottomDescription:
    "Chicharrones blog helvetica normcore iceland tousled brook viral artisan.",
  buttonLabel: "Submit",
  address:
    "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  email: "example@email.com",
  phone: "123-456-7890",
  mapIframeSrc:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d71967.57989736123!2d12.507545599999998!3d55.689216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x465253a7a08b0e87%3A0x2e01262ccc705c92!2sJulius%20Thomsens%20Pl.%201%2C%201925%20Frederiksberg!3m2!1d55.681291599999994!2d12.5525136!5e0!3m2!1sen!2sdk!4v1637384541323!5m2!1sen!2sdk",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  label: "Feedback",
  onSubmit: (_, inputTop, inputBottom, textArea) => {
    action("onSubmit")({ inputTop, inputBottom, textArea });
  },
  topDescription:
    "Post-ironic portland shabby chic echo park, banjo fashion axe",
  bottomDescription:
    "Chicharrones blog helvetica normcore iceland tousled brook viral artisan.",
  buttonLabel: "Submit",
  address:
    "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  email: "example@email.com",
  phone: "123-456-7890",
  mapIframeSrc:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d71967.57989736123!2d12.507545599999998!3d55.689216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x465253a7a08b0e87%3A0x2e01262ccc705c92!2sJulius%20Thomsens%20Pl.%201%2C%201925%20Frederiksberg!3m2!1d55.681291599999994!2d12.5525136!5e0!3m2!1sen!2sdk!4v1637384541323!5m2!1sen!2sdk",
};