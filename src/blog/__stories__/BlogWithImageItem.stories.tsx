import { Story, Meta } from "@storybook/react/types-6-0";
import { MOCK_ENTRY_WITH_IMG } from "./mock-data";
import {
  BlogWithImageItem,
  BlogWithImageItemProps,
} from "../BlogWithImageItem";

export default {
  title: "Blog/BlogWithImageItem",
  component: BlogWithImageItem,
  argTypes: {
    linkNode: { control: "none" },
    imgNode: { control: "none" },
    includeWrapperBg: { control: "none" },
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<BlogWithImageItemProps> = (args) => (
  <BlogWithImageItem {...args} />
);

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_ENTRY_WITH_IMG,
};
