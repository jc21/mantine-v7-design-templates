import { Button, Container, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ExampleItem } from "./Example";
import classes from "./Hero.module.css";

interface Props {
  item: ExampleItem;
}
function OptInRender({ item }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container size={1400} py={32}>
      <div>
        <Text size="lg" c="dimmed" className={classes.description}>
          This component cannot be shown in the preview mode.
        </Text>
        <Text size="lg" c="dimmed" className={classes.description}>
          <Button mt={32} onClick={open}>
            Open full preview
          </Button>
        </Text>
      </div>
      {opened && (
        <Modal.Root
          opened={opened}
          onClose={close}
          fullScreen
          radius={0}
          transitionProps={{ transition: "fade", duration: 200 }}>
          {/* <Modal.Overlay /> */}
          <Modal.Content>
            <Modal.Body>
              {item.component} <Modal.CloseButton />
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}
    </Container>
  );
}

export { OptInRender };
