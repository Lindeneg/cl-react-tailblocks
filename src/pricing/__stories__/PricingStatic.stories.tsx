import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingStatic, PricingStaticProps } from "../PricingStatic";
import { MOCK_DATA_CARDS } from "./mock-data";
import { getClass } from "../../shared";
import { Theme } from "../../types";

export default {
  title: "Pricing/PricingStatic",
  component: PricingStatic,
  argTypes: {
    onLearnMore: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<PricingStaticProps> = (args) => (
  <PricingStatic {...args} />
);

function Td({ name, theme }: { name: string; theme: Theme }) {
  return (
    <td
      className={getClass(
        theme,
        "px-4 py-3 border-t-2 border-b-2 text-lg",
        "border-gray-200 text-gray-900",
        "text-white border-gray-800"
      )}
    >
      {name}
    </td>
  );
}

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  title: "Pricing",
  description:
    "Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee",
  headers: ["Plan", "Speed", "Storage", "Price"],
  data: [
    ["Start", "5 Mb/s", "15 GB", (theme) => <Td name="Free" theme={theme} />],
    ["Pro", "25 Mb/s", "25 GB", (theme) => <Td name="$24" theme={theme} />],
    [
      "Business",
      "36 Mb/s",
      "40 GB",
      (theme) => <Td name="$50" theme={theme} />,
    ],
    [
      "Exclusive",
      "48 Mb/s",
      "120 GB",
      (theme) => <Td name="$72" theme={theme} />,
    ],
  ],
};
