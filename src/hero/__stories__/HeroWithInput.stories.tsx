import { Story, Meta } from "@storybook/react/types-6-0";
import { HeroWithInput, HeroWithInputProps } from "../HeroWithInput";

export default {
  title: "Hero/HeroWithInput",
  component: HeroWithInput,
  argTypes: {
    inputProps: { control: "none" },
    imgNode: { control: "none" },
    onSubmit: { control: "none" },
    onGooglePlayClick: { control: "none" },
    onAppleStoreClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<HeroWithInputProps> = (args) => (
  <HeroWithInput {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  orientation: "right",
  theme: "light",
  color: "indigo",
  title: "Knausgaard typewriter readymade marfa",
  description: `Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.`,
  imgSrc: "https://dummyimage.com/720x600",
  bottomText: "Neutra shabby chic ramps, viral fixie.",
  buttonText: "Button",
  inputProps: {
    label: "Placeholder",
  },
};
