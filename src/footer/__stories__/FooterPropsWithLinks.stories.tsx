import { Story, Meta } from "@storybook/react/types-6-0";
import { FooterWithLinks, FooterWithLinksProps } from "../FooterWithLinks";
import { MOCK_FOOTER_WITH_LINKS } from "./mock-data";

export default {
  title: "Footer/FooterWithLinks",
  component: FooterWithLinks,
  argTypes: {
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterWithLinksProps> = (args) => (
  <FooterWithLinks {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_FOOTER_WITH_LINKS,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_FOOTER_WITH_LINKS,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
