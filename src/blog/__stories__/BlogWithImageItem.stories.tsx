import { Story, Meta } from "@storybook/react/types-6-0";
import {
  BlogWithImageItem,
  BlogWithImageItemProps,
} from "../BlogWithImageItem";

export default {
  title: "BlogWithImageItem",
  component: BlogWithImageItem,
  argTypes: {
    linkNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithImageItemProps> = (args) => (
  <BlogWithImageItem {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  imgSrc: "https://dummyimage.com/720x400",
  imgAlt: "dummy-image-blog-item",
  label: "CATEGORY",
  title: "The Catalyzer",
  content:
    "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  views: 1200,
  comments: 6,
  theme: "light",
  linkText: "Learn More",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  imgSrc: "https://dummyimage.com/720x400",
  imgAlt: "dummy-image-blog-item",
  label: "CATEGORY",
  title: "The Catalyzer",
  content:
    "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  views: 1200,
  comments: 6,
  theme: "dark",
  linkText: "Learn More",
};
