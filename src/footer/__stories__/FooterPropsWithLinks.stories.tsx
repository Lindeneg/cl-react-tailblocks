import { Story, Meta } from "@storybook/react/types-6-0";
import { FooterWithLinks, FooterWithLinksProps } from "../FooterWithLinks";
import { MOCK_FOOTER_WITH_LINKS } from "./mock-data";

export default {
  title: "Footer/WithLinks",
  component: FooterWithLinks,
  argTypes: {
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterWithLinksProps> = (args) => (
  <FooterWithLinks {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  reverse: false,
  theme: "light",
  color: "indigo",
  ...MOCK_FOOTER_WITH_LINKS,
};
