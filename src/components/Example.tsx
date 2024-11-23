import { ReactNode, useState } from "react";

import { CodeHighlight } from "@mantine/code-highlight";
import {
  Badge,
  Box,
  Center,
  Group,
  SegmentedControl,
  Tabs,
  Text,
  rem,
} from "@mantine/core";
import { FiCode, FiExternalLink, FiEye, FiHash } from "react-icons/fi";

import classes from "./Example.module.css";
import { OptInRender } from "./OptInRender";

export interface ExampleFile {
  source: string;
  sourceFilename: string;
  type: "tsx" | "css";
}

export interface ExampleItem {
  title: string;
  component: ReactNode;
  files: ExampleFile[];
  isMantineUI?: boolean;
  optinRender?: boolean;
}

interface Props {
  item: ExampleItem;
}

function Example({ item }: Props) {
  const [value, setValue] = useState("preview");
  const controlIconStyle = { width: rem(16), height: rem(16) };
  const fileIconStyle = { width: rem(12), height: rem(12) };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "css":
        return <FiHash style={fileIconStyle} />;
      default:
        return <FiCode style={fileIconStyle} />;
    }
  };

  return (
    <Box my="xl" className={classes.wrapper}>
      <Group justify="space-between" p="xs" className={classes.header}>
        <Group>
          <Text size="lg">{item.title}</Text>
          {item.isMantineUI ? (
            <Badge
              className={classes.clickable}
              color="cyan"
              rightSection={<FiExternalLink />}
              onClick={() => {
                window.open("https://ui.mantine.dev", "_blank")?.focus();
              }}>
              Mantine UI
            </Badge>
          ) : null}
        </Group>
        <SegmentedControl
          value={value}
          onChange={setValue}
          data={[
            {
              value: "preview",
              label: (
                <Center>
                  <FiEye style={controlIconStyle} />
                  <Box ml={10}>Preview</Box>
                </Center>
              ),
            },
            {
              value: "code",
              label: (
                <Center>
                  <FiCode style={controlIconStyle} />
                  <Box ml={10}>Code</Box>
                </Center>
              ),
            },
          ]}
        />
      </Group>
      <Tabs value={value}>
        <Tabs.Panel value="preview" className={classes.preview}>
          {item.optinRender ? <OptInRender item={item} /> : item.component}
        </Tabs.Panel>
        <Tabs.Panel value="code" className={classes.code}>
          <Tabs
            defaultValue={item.files[0].sourceFilename}
            classNames={classes}>
            {item.files.length && (
              <>
                <Tabs.List className={classes.filelist}>
                  {item.files.map((file, idx) => (
                    <Tabs.Tab
                      key={idx}
                      value={file.sourceFilename}
                      leftSection={getFileIcon(file.type)}>
                      {file.sourceFilename}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
                {item.files.map((file, idx) => (
                  <Tabs.Panel key={idx} value={file.sourceFilename}>
                    <CodeHighlight
                      code={file.source}
                      language={file.type}
                      className={classes.roundbottom}
                    />
                  </Tabs.Panel>
                ))}
              </>
            )}
          </Tabs>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export { Example };
