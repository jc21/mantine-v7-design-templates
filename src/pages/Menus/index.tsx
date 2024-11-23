import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { Hero } from "src/examples/Hero";

const items: ExampleItem[] = [
  {
    title: "Hero",
    component: <Hero />,
    files: [
      {
        source: (await import("src/examples/Hero.tsx?raw")).default,
        sourceFilename: "Hero.tsx",
        type: "tsx",
      },
      {
        source: (await import("src/examples/Hero.module.css?raw")).default,
        sourceFilename: "Hero.module.css",
        type: "css",
      },
    ],
  },
];

function Menus() {
  const components = items.map((item, idx) => (
    <Example key={idx} item={item} />
  ));

  return (
    <>
      <Title order={1} my="xl">
        Menus
      </Title>
      {components}
    </>
  );
}

export default Menus;
