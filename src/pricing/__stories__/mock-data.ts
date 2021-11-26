import { Prices } from "../PricingCard";

export const MOCK_DATA_CARD = {
  features: [
    "Vexillologist pitchfork",
    "Tumeric plaid portland",
    "Mixtape chillwave tumeric",
  ],
  bottomText: "Literally you probably haven't heard of them jean shorts.",
  label: "START",
  price: "Free",
};

export const MOCK_DATA_CARDS = {
  data: [
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "START",
      prices: {
        price: "Free",
      },
    },
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "PRO",
      prices: [
        {
          price: "$38",
          per: "/month",
        },
        {
          price: "$400",
          per: "/year",
        },
      ] as [Prices, Prices],
      comparisons: ["", "$456"] as [string, string],
    },
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "BUSINESS",
      prices: [
        {
          price: "$56",
          per: "/month",
        },
        {
          price: "$600",
          per: "/year",
        },
      ] as [Prices, Prices],
      comparisons: ["", "$672"] as [string, string],
      selected: false,
    },
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "SPECIAL",
      prices: [
        {
          price: "$72",
          per: "/month",
        },
        {
          price: "$750",
          per: "/year",
        },
      ] as [Prices, Prices],
      comparisons: ["", "$864"] as [string, string],
      selected: false,
    },
  ],
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.",
  title: "Pricing",
  options: ["Monthly", "Annually"] as [string, string],
};
