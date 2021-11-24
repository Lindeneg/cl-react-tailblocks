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

export const RightLight = MetaComp.bind({});
RightLight.args = {
  title: (
    <span>
      Before they sold out
      <br className="hidden lg:inline-block" />
      readymade gluten
    </span>
  ),
  description: `Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
  plant cold-pressed tacos poke beard tote bag. Heirloom echo park
  mlkshk tote bag selvage hot chicken authentic tumeric truffaut
  hexagon try-hard chambray.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "right",
  theme: "light",
  color: "indigo",
};

export const RightDark = MetaComp.bind({});
RightDark.args = {
  title: (
    <span>
      Before they sold out
      <br className="hidden lg:inline-block" />
      readymade gluten
    </span>
  ),
  description: `Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
  plant cold-pressed tacos poke beard tote bag. Heirloom echo park
  mlkshk tote bag selvage hot chicken authentic tumeric truffaut
  hexagon try-hard chambray.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "right",
  theme: "dark",
  color: "indigo",
};
RightDark.parameters = {
  backgrounds: { default: "dark" },
};

export const LeftLight = MetaComp.bind({});
LeftLight.args = {
  title: (
    <span>
      Before they sold out
      <br className="hidden lg:inline-block" />
      readymade gluten
    </span>
  ),
  description: `Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
  plant cold-pressed tacos poke beard tote bag. Heirloom echo park
  mlkshk tote bag selvage hot chicken authentic tumeric truffaut
  hexagon try-hard chambray.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "left",
  theme: "light",
  color: "indigo",
};

export const LeftDark = MetaComp.bind({});
LeftDark.args = {
  title: (
    <span>
      Before they sold out
      <br className="hidden lg:inline-block" />
      readymade gluten
    </span>
  ),
  description: `Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
  plant cold-pressed tacos poke beard tote bag. Heirloom echo park
  mlkshk tote bag selvage hot chicken authentic tumeric truffaut
  hexagon try-hard chambray.`,
  imgSrc: "https://dummyimage.com/720x600",
  orientation: "left",
  theme: "dark",
  color: "indigo",
};
LeftDark.parameters = {
  backgrounds: { default: "dark" },
};
