import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { FullWithSide } from "src/examples/Layouts/FullWithSide/FullWithSide";

const items: ExampleItem[] = [
  {
    title: "Full with Sidebar",
    component: (
      <FullWithSide>
        <p>Press ESCAPE to close this preview</p>
      </FullWithSide>
    ),
    files: [
      {
        source: (
          await import("src/examples/Layouts/FullWithSide/FullWithSide.tsx?raw")
        ).default,
        sourceFilename: "FullWithSide.tsx",
        type: "tsx",
      },
      {
        source: (
          await import(
            "src/examples/Layouts/FullWithSide/FullWithSide.module.css?raw"
          )
        ).default,
        sourceFilename: "FullWithSide.module.css",
        type: "css",
      },
      {
        source: (
          await import(
            "src/examples/Layouts/FullWithSide/NavLinksGroup.tsx?raw"
          )
        ).default,
        sourceFilename: "NavLinksGroup.tsx",
        type: "tsx",
      },
      {
        source: (
          await import(
            "src/examples/Layouts/FullWithSide/NavLinksGroup.module.css?raw"
          )
        ).default,
        sourceFilename: "NavLinksGroup.module.css",
        type: "css",
      },
    ],
    optinRender: true,
  },
];

function Layouts() {
  const components = items.map((item, idx) => (
    <Example key={idx} item={item} />
  ));

  return (
    <>
      <Title order={1} my="xl">
        Layouts
      </Title>
      {components}
    </>
  );
}

export default Layouts;
