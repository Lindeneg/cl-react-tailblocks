import { Story, Meta } from "@storybook/react/types-6-0";
import { FooterLinks, FooterLinksProps } from "../Footer";
import { MOCK_DATA_LINKS } from "./mock-data";

export default {
  title: "Footer/Default",
  component: FooterLinks,
} as Meta;

const MetaComp: Story<FooterLinksProps> = (args) => <FooterLinks {...args} />;

export const LinksLight = MetaComp.bind({});
LinksLight.args = {
  ...MOCK_DATA_LINKS.links[0],
  theme: "light",
  color: "indigo",
};

export const LinksDark = MetaComp.bind({});
LinksDark.args = {
  ...MOCK_DATA_LINKS.links[0],
  theme: "dark",
  color: "indigo",
};
LinksDark.parameters = {
  backgrounds: { default: "dark" },
};
