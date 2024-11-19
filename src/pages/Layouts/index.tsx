import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { FullWithSide } from "src/examples/Layouts/FullWithSide";

const items: ExampleItem[] = [
  {
    title: "Full with Sidebar",
    component: (
      <FullWithSide>
        <p>Press ESCAPE to close this preview</p>
      </FullWithSide>
    ),
    source: (await import("src/examples/Layouts/FullWithSide.tsx?raw")).default,
    sourceFilename: "FullWithSide.tsx",
    sourceCss: (
      await import("src/examples/Layouts/FullWithSide.module.css?raw")
    ).default,
    sourceCssFilename: "FullWithSide.module.css",
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
