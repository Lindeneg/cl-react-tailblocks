import { Story, Meta } from "@storybook/react/types-6-0";
import {
  FooterWithLinksAndInputBig,
  FooterWithLinksAndInputBigProps,
} from "../FooterWithLinksAndInputBig";
import { MOCK_DATA_LINKS, MOCK_FOOTER } from "./mock-data";

export default {
  title: "Footer/FooterWithLinksAndInputBig",
  component: FooterWithLinksAndInputBig,
  argTypes: {
    linkNode: { control: "none" },
    onClick: { control: "none" },
    inputProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterWithLinksAndInputBigProps> = (args) => (
  <FooterWithLinksAndInputBig {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_FOOTER,
  inputProps: {
    label: "Placeholder",
  },
  formDescription: "Bitters chicharrones fanny pack waistcoat green juice",
  bottomText: "Enamel pin tousled raclette tacos irony",
  buttonText: "Button",
  links: [...MOCK_DATA_LINKS.links, ...[...MOCK_DATA_LINKS.links].slice(0, 2)],
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_FOOTER,
  inputProps: {
    label: "Placeholder",
  },
  formDescription: "Bitters chicharrones fanny pack waistcoat green juice",
  bottomText: "Enamel pin tousled raclette tacos irony",
  buttonText: "Button",
  links: [...MOCK_DATA_LINKS.links, ...[...MOCK_DATA_LINKS.links].slice(0, 2)],
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
