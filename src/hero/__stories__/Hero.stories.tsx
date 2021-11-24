import { Story, Meta } from "@storybook/react/types-6-0";
import { Hero, HeroProps } from "../Hero";

export default {
  title: "Hero/Hero",
  component: Hero,
  argTypes: {
    imgAlt: { control: "none" },
    btnLeft: { control: "none" },
    btnRight: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeroProps> = (args) => <Hero {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  title: "Microdosing synth tattooed vexillologist",
  description: `Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "right",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  title: "Microdosing synth tattooed vexillologist",
  description: `Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "right",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
