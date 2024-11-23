import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { NotFound } from "src/examples/ErrorPages/NotFound";
import { NotFoundBackground } from "src/examples/ErrorPages/NotFoundBackground";
import { NotFoundImage } from "src/examples/ErrorPages/NotFoundImage";
import { ServerError } from "src/examples/ErrorPages/ServerError";
import { ServerOverload } from "src/examples/ErrorPages/ServerOverload";

const items: ExampleItem[] = [
  {
    title: "404 Page with Image",
    component: <NotFoundImage />,
    files: [
      {
        source: (await import("src/examples/ErrorPages/NotFoundImage.tsx?raw"))
          .default,
        sourceFilename: "NotFoundImage.tsx",
        type: "tsx",
      },
      {
        source: (
          await import("src/examples/ErrorPages/NotFoundImage.module.css?raw")
        ).default,
        sourceFilename: "NotFoundImage.module.css",
        type: "css",
      },
    ],
    isMantineUI: true,
  },
  {
    title: "404 Page",
    component: <NotFound />,
    files: [
      {
        source: (await import("src/examples/ErrorPages/NotFound.tsx?raw"))
          .default,
        sourceFilename: "NotFound.tsx",
        type: "tsx",
      },
      {
        source: (
          await import("src/examples/ErrorPages/NotFound.module.css?raw")
        ).default,
        sourceFilename: "NotFound.module.css",
        type: "css",
      },
    ],
    isMantineUI: true,
  },
  {
    title: "404 as background image",
    component: <NotFoundBackground />,
    files: [
      {
        source: (
          await import("src/examples/ErrorPages/NotFoundBackground.tsx?raw")
        ).default,
        sourceFilename: "NotFoundBackground.tsx",
        type: "tsx",
      },
      {
        source: (
          await import(
            "src/examples/ErrorPages/NotFoundBackground.module.css?raw"
          )
        ).default,
        sourceFilename: "NotFoundBackground.module.css",
        type: "css",
      },
    ],
    isMantineUI: true,
  },
  {
    title: "500 Page",
    component: <ServerError />,
    files: [
      {
        source: (await import("src/examples/ErrorPages/ServerError.tsx?raw"))
          .default,
        sourceFilename: "ServerError.tsx",
        type: "tsx",
      },
      {
        source: (
          await import("src/examples/ErrorPages/ServerError.module.css?raw")
        ).default,
        sourceFilename: "ServerError.module.css",
        type: "css",
      },
    ],
    isMantineUI: true,
  },
  {
    title: "503 Page",
    component: <ServerOverload />,
    files: [
      {
        source: (await import("src/examples/ErrorPages/ServerOverload.tsx?raw"))
          .default,
        sourceFilename: "ServerOverload.tsx",
        type: "tsx",
      },
      {
        source: (
          await import("src/examples/ErrorPages/ServerOverload.module.css?raw")
        ).default,
        sourceFilename: "ServerOverload.module.css",
        type: "css",
      },
    ],
    isMantineUI: true,
  },
];

function Errors() {
  const components = items.map((item, idx) => (
    <Example key={idx} item={item} />
  ));

  return (
    <>
      <Title order={1} my="xl">
        Error Pages
      </Title>
      {components}
    </>
  );
}

export default Errors;
