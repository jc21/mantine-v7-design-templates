import { Title } from "@mantine/core";

import { Example } from "src/components";
import { Hero } from "src/examples/Hero";

const items = [
  {
    title: "Hero",
    component: <Hero />,
    source: (await import("src/examples/Hero.tsx?raw")).default,
    sourceFilename: "Hero.tsx",
    sourceCss: (await import("src/examples/Hero.module.css?raw")).default,
    sourceCssFilename: "Hero.module.css",
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
