import { Story, Meta } from "@storybook/react/types-6-0";
import {
  BlogWithImageItems,
  BlogWithImageItemsProps,
} from "../BlogWithImageItems";

export default {
  title: "BlogWithImageItems",
  component: BlogWithImageItems,
} as Meta;

const MOCK_DATA = [
  {
    imgSrc: "https://dummyimage.com/720x400",
    label: "CATEGORY",
    title: "The Catalyzer",
    content:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    onClick: () => {},
    views: 1200,
    comments: 6,
  },
  {
    imgSrc: "https://dummyimage.com/720x400",
    label: "CATEGORY",
    title: "The Catalyzer",
    content:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    onClick: () => {},
    views: 1200,
    comments: 6,
  },
  {
    imgSrc: "https://dummyimage.com/720x400",
    label: "CATEGORY",
    title: "The Catalyzer",
    content:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    onClick: () => {},
    views: 1200,
    comments: 6,
  },
];

const MetaComp: Story<BlogWithImageItemsProps> = (args) => (
  <BlogWithImageItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA,
  theme: "light",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA,
  theme: "dark",
};
