import { Title } from "@mantine/core";

import { Example } from "src/components";
import { NotFound } from "src/examples/ErrorPages/NotFound";
import { NotFoundBackground } from "src/examples/ErrorPages/NotFoundBackground";
import { NotFoundImage } from "src/examples/ErrorPages/NotFoundImage";
import { ServerError } from "src/examples/ErrorPages/ServerError";
import { ServerOverload } from "src/examples/ErrorPages/ServerOverload";

const items = [
  {
    title: "404 Page with Image",
    component: <NotFoundImage />,
    source: (await import("src/examples/ErrorPages/NotFoundImage.tsx?raw"))
      .default,
    sourceFilename: "NotFoundImage.tsx",
    sourceCss: (
      await import("src/examples/ErrorPages/NotFoundImage.module.css?raw")
    ).default,
    sourceCssFilename: "NotFoundImage.module.css",
  },
  {
    title: "404 Page",
    component: <NotFound />,
    source: (await import("src/examples/ErrorPages/NotFound.tsx?raw")).default,
    sourceFilename: "NotFound.tsx",
    sourceCss: (await import("src/examples/ErrorPages/NotFound.module.css?raw"))
      .default,
    sourceCssFilename: "NotFound.module.css",
  },
  {
    title: "404 as background image",
    component: <NotFoundBackground />,
    source: (await import("src/examples/ErrorPages/NotFoundBackground.tsx?raw"))
      .default,
    sourceFilename: "NotFoundBackground.tsx",
    sourceCss: (
      await import("src/examples/ErrorPages/NotFoundBackground.module.css?raw")
    ).default,
    sourceCssFilename: "NotFoundBackground.module.css",
  },
  {
    title: "500 Page",
    component: <ServerError />,
    source: (await import("src/examples/ErrorPages/ServerError.tsx?raw"))
      .default,
    sourceFilename: "ServerError.tsx",
    sourceCss: (
      await import("src/examples/ErrorPages/ServerError.module.css?raw")
    ).default,
    sourceCssFilename: "ServerError.module.css",
  },
  {
    title: "503 Page",
    component: <ServerOverload />,
    source: (await import("src/examples/ErrorPages/ServerOverload.tsx?raw"))
      .default,
    sourceFilename: "ServerOverload.tsx",
    sourceCss: (
      await import("src/examples/ErrorPages/ServerOverload.module.css?raw")
    ).default,
    sourceCssFilename: "ServerOverload.module.css",
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
