import { Story, Meta } from "@storybook/react/types-6-0";
import { Footer, FooterProps } from "../Footer";
import { MOCK_FOOTER } from "./mock-data";

export default {
  title: "Footer/Footer",
  component: Footer,
  argTypes: {
    linkNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FooterProps> = (args) => <Footer {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  ...MOCK_FOOTER,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  ...MOCK_FOOTER,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
