import { Button, Container, Space } from "@mantine/core";

import { Hero } from "src/components";

function Home() {
  return (
    <Container py="md">
      <div style={{ display: "flex" }}>
        <Hero
          title="Automated AI code reviews for any stack"
          subTitle="Build more reliable software with AI companion. AI is also trained to detect lazy developers who do nothing and just complain on Twitter.">
          <Button size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button size="lg">Purchase a license</Button>
        </Hero>
      </div>
      <Space h="xl" />
    </Container>
  );
}

export default Home;
