import { Story, Meta } from "@storybook/react/types-6-0";
import { FooterLinks, FooterLinksProps } from "../Footer";
import { MOCK_DATA_LINKS } from "./mock-data";

export default {
  title: "Footer/FooterLinks",
  component: FooterLinks,
} as Meta;

const MetaComp: Story<FooterLinksProps> = (args) => <FooterLinks {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_DATA_LINKS.links[0],
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_DATA_LINKS.links[0],
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
