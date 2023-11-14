import { Button, Container, Space } from "@mantine/core";

import { Hero } from "src/components";

function Home() {
  return (
    <Container py="md">
      <div style={{ display: "flex" }}>
        <Hero
          title="Production-ready Mantine UI Templates for developers"
          subTitle="A growing collection of hand-crafted & responsive Mantine UI templates ready to drop into your React project.">
          <Button
            size="lg"
            component="a"
            href="https://github.com/jc21/mantine-v7-design-templates"
            target="_blank">
            Contribute
          </Button>
        </Hero>
      </div>
      <Space h="xl" />
    </Container>
  );
}

export default Home;
