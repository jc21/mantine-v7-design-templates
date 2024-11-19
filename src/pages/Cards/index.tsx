import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { StatsGroup } from "src/examples/Cards/StatsGroup";

const statsGroupData = [
  {
    title: "BTC",
    value: "$13,456",
    diff: 34,
  },
  {
    title: "ETH",
    value: "$4,145",
    diff: -13,
  },
  {
    title: "DOGE",
    value: "$ 0.745",
    diff: 18,
  },
];

const items: ExampleItem[] = [
  {
    title: "Stats Group",
    component: <StatsGroup data={statsGroupData} />,
    source: (await import("src/examples/Cards/StatsGroup.tsx?raw")).default,
    sourceFilename: "StatsGroup.tsx",
    // sourceCss: (
    //   await import("src/examples/ErrorPages/StatsGroup.module.css?raw")
    // ).default,
    // sourceCssFilename: "NotFoundImage.module.css",
    // isMantineUI: true,
  },
];

function Cards() {
  const components = items.map((item, idx) => (
    <Example key={idx} item={item} />
  ));

  return (
    <>
      <Title order={1} my="xl">
        Cards
      </Title>
      {components}
    </>
  );
}

export default Cards;
