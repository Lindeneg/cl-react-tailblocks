import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Hero, HeroProps } from "../Hero";

export default {
  title: "Hero/Default",
  component: Hero,
  argTypes: {
    imgAlt: { control: "none" },
    btnLeft: { control: "none" },
    btnRight: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeroProps> = (args) => <Hero {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  orientation: "right",
  theme: "light",
  color: "indigo",
  title: "Microdosing synth tattooed vexillologist",
  description: `Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.`,
  imgSrc: "https://dummyimage.com/720x600",
  btnLeft: {
    buttonText: "Button",
    onClick: (e) => {
      action("onLeftButtonClick")(e);
    },
  },
  btnRight: {
    buttonText: "Button",
    onClick: (e) => {
      action("onRightButtonClick")(e);
    },
  },
};
