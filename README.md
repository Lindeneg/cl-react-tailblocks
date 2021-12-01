### cl-react-tailblocks

[TypeScript](https://www.typescriptlang.org/) implementation of [Tailblocks](https://tailblocks.cc/) components. [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom) and [tailwindcss](https://www.npmjs.com/package/tailwindcss) are [peerDependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies) and are thus expected to already be in your project.

All components supports a `light` and `dark` theme as well as these colors: `indigo | yellow | red | purple | pink | blue | green`

Tailblocks components that are not implemented are specified in the `MISSING` file.

### Install

`yarn add cl-react-tailblocks`

### Why?

[Mert Cukuren](https://github.com/mertJF) made [this](https://github.com/mertJF/tailblocks) wonderful repository that I utilize and it's great. However, copy/pasting each time in each project, making it jsx, modifying the content and so on, can be very repetitive. Thus, I made this library, that allows to simply import the component you want with the properties you need.

### Docs

The only form of documentation for now is via `storybook`, which is located here [here](https://lindeneg.github.io/cl-react-tailblocks/).

However, a few patterns are as follows:

##### Theme

You can specify a global theme using `React.Context`. A `ThemeContextProvider` is exposed and can be used for this purpose. On top of that, each component takes two optional props: `theme` and `color`.

- If no provider is used and no theme props are specified, the default values are `light` and `indigo`.

- If a provider is used and no theme props are specified, the provider context will be used.

- If a provider is used and theme props specified, the theme props will override the context for that specific component.

##### Nodes

Some props, such as links, images, svgs and so on, always allows for an optional node that should contain a `React.ReactNode` - or in some cases a function that returns a `React.ReactNode`. This will override the default node, allowing for decent component customization.

The pattern is that all of those optional node props will have property names that end on `node` and be prefixed with it's context. So a custom `React.ReactNode` for a `link`, will always have the property name `linkNode`, for an `svg` it will always be `svgNode` and so on.
