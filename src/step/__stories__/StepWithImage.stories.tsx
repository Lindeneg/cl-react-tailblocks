import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { StepWithImage, StepWithImageProps } from "../StepWithImage";

export default {
  title: "Step/StepWithImage",
  component: StepWithImage,
  argTypes: {},
} as Meta;

const MetaComp: Story<StepWithImageProps> = (args) => (
  <StepWithImage {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  imgSrc: "https://dummyimage.com/1200x500",
  steps: [
    {
      description:
        "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
      icon: "shield",
    },
    {
      description: `Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.`,
      icon: "graph",
    },
    {
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
      icon: "anchor",
    },
    {
      description:
        "Kinfolk bespoke try-hard cliche palo santo offal. VHS cornhole pop-up, try-hard 8-bit iceland helvetica.",
      icon: "person",
    },
    {
      description:
        "Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.",
      icon: "finish",
      label: "FINISH",
    },
  ],
};
