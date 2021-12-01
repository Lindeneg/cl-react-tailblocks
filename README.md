### cl-react-tailblocks

### What?

[TypeScript](https://www.typescriptlang.org/) implementation of [Tailblocks](https://tailblocks.cc/) components. [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom) and [tailwindcss](https://www.npmjs.com/package/tailwindcss) are [peerDependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies) and are thus expected to already be in your project.

All components supports a `light` and `dark` theme as well as these colors: `indigo | yellow | red | purple | pink | blue | green`

Tailblocks components that are not implemented are specified in the `MISSING` file.

### Install

`yarn add cl-react-tailblocks`

### Why?

[Mert Cukuren](https://github.com/mertJF) made [this](https://github.com/mertJF/tailblocks) wonderful repository that I utilize and it's great. However, copy/pasting each time in each project, making it jsx, modifying the content and so on, can be very repetitive. Thus, I made this library, that allows to simply import the component you want with the properties you need.

### Docs

The only form of documentation for now is via `storybook`, which is located here [here](https://lindeneg.github.io/cl-react-tailblocks/).
