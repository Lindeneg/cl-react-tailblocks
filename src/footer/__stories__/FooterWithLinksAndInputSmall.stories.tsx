import { Story, Meta } from "@storybook/react/types-6-0";
import {
  FooterWithLinksAndInputSmall,
  FooterWithLinksAndInputSmallProps,
} from "../FooterWithLinksAndInputSmall";
import { MOCK_DATA_LINKS, MOCK_FOOTER } from "./mock-data";

export default {
  title: "Footer/FooterWithLinksAndInputSmall",
  component: FooterWithLinksAndInputSmall,
  argTypes: {
    linkNode: { control: "none" },
    onClick: { control: "none" },
    inputProps: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterWithLinksAndInputSmallProps> = (args) => (
  <FooterWithLinksAndInputSmall {...args} />
);

export const Small = MetaComp.bind({});
Small.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_FOOTER,
  formHeader: "SUBSCRIBE",
  inputProps: {
    label: "Placeholder",
  },
  formDescription: "Bitters chicharrones fanny pack waistcoat green juice",
  buttonText: "Button",
  links: [...MOCK_DATA_LINKS.links].slice(0, 3),
};
