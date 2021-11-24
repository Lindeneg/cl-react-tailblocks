import { Story, Meta } from "@storybook/react/types-6-0";
import { Footer, FooterProps } from "../Footer";
import { MOCK_FOOTER } from "./mock-data";

export default {
  title: "Footer/Default",
  component: Footer,
  argTypes: {
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterProps> = (args) => <Footer {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_FOOTER,
};
