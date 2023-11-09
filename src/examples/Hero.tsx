import { Button, Container, Text, Title } from "@mantine/core";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>A hero we all need</Title>
        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            This is a subtitle
          </Text>
        </Container>
        <div className={classes.children}>
          <Button size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button size="lg">Purchase a license</Button>
        </div>
      </div>
    </Container>
  );
}

export { Hero };
