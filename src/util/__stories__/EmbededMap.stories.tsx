import { Story, Meta } from "@storybook/react/types-6-0";
import { EmbededMap, EmbededMapProps } from "../EmbededMap";

export default {
  title: "Util/EmbededMap",
  component: EmbededMap,
} as Meta;

const MetaComp: Story<EmbededMapProps> = (args) => <EmbededMap {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  className: "absolute inset-0 bg-gray-300",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247.8926153063958!2d12.591334552340895!3d55.67738268021068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465246e761f0e6d1%3A0x716ff8c8c8f57b25!2sBentley%20Systems%20Scandinavia%20A%2FS!5e0!3m2!1sen!2sdk!4v1637470861492!5m2!1sen!2sdk",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  className: "absolute inset-0 bg-gray-900",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247.8926153063958!2d12.591334552340895!3d55.67738268021068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465246e761f0e6d1%3A0x716ff8c8c8f57b25!2sBentley%20Systems%20Scandinavia%20A%2FS!5e0!3m2!1sen!2sdk!4v1637470861492!5m2!1sen!2sdk",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
