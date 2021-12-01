import React from "react";
import {
  Header,
  Hero,
  BlogItems,
  Footer,
  Theme,
  ThemeColor,
} from "cl-react-tailblocks";

function App() {
  const theme: { theme: Theme; color: ThemeColor } = {
    theme: "dark",
    color: "green",
  };
  return (
    <div>
      <Header
        buttonText="Button"
        links={[
          {
            label: "First Link",
          },
          {
            label: "Second Link",
          },
          {
            label: "Third Link",
          },
          {
            label: "Fourth Link",
          },
        ]}
        name="Tailblocks"
        onClick={() => {}}
        orientation="right"
        {...theme}
      />
      <Hero
        btnLeft={{
          buttonText: "Button",
          onClick: () => {},
        }}
        btnRight={{
          buttonText: "Button",
          onClick: () => {},
        }}
        description="Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."
        imgSrc="https://dummyimage.com/720x600"
        orientation="right"
        title="Microdosing synth tattooed vexillologist"
        {...theme}
      />
      <BlogItems
        data={[
          {
            comments: 6,
            content:
              "Cold-pressed photo booth fam kinfolk sriracha leggings jianbing microdosing tousled waistcoat.",
            label: "CATEGORY",
            onClick: () => {},
            title: "The Catalyzer",
            views: 1200,
          },
          {
            comments: 256,
            content:
              "Photo booth kinfolk fam jianbing cold-leggings-pressed microdosing tousled waistcoat sriracha.",
            label: "CATEGORY",
            onClick: () => {},
            title: "The 400 Blows",
            views: 25210,
          },
          {
            comments: 45,
            content:
              "Booth kinfolk leggings fam cold-pressed sriracha photo jianbing microdosing waistcoat tousled.",
            label: "CATEGORY",
            onClick: () => {},
            title: "Shooting Stars",
            views: 7592,
          },
        ]}
        {...theme}
      />
      <Footer
        credit={{
          aProps: {
            href: "https://github.com/lindeneg",
            rel: "no-referrer",
            target: "_blank",
          },
          label: "@lindeneg",
          year: "2021",
        }}
        name="Tailblocks"
        socials={{
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
        }}
        {...theme}
      />
    </div>
  );
}

export default App;
