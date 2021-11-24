import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  ContactWithMapSmall,
  ContactWithMapSmallProps,
} from "../ContactWithMapSmall";

export default {
  title: "Contact/WithMap",
  component: ContactWithMapSmall,
  argTypes: {
    onSubmit: { control: "none" },
    textAreaProps: { control: "none" },
    inputTopProps: { control: "none" },
    inputBottomProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<ContactWithMapSmallProps> = (args) => (
  <ContactWithMapSmall {...args} />
);

export const Small = MetaComp.bind({});
Small.args = {
  theme: "light",
  color: "indigo",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247.8926153063958!2d12.591334552340895!3d55.67738268021068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465246e761f0e6d1%3A0x716ff8c8c8f57b25!2sBentley%20Systems%20Scandinavia%20A%2FS!5e0!3m2!1sen!2sdk!4v1637470861492!5m2!1sen!2sdk",
};
