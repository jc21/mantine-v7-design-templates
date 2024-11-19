import {
  Anchor,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import classes from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <Box className={classes.wrapper} py={16}>
      <Title order={1} fw="bolder">
        Mantine Site
      </Title>
      <Text c="dimmed" size="sm" mt={5}>
        Don&apos;t have an account?{" "}
        <Anchor size="sm" href="/register">
          Register
        </Anchor>
      </Text>
      <Box w={400}>
        <Card withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="test@example.com" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group mt="md" justify="space-between">
            <Checkbox label="Remember me" />
            <Anchor size="sm" href="#">
              Forgot Password？
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Log in
          </Button>
        </Card>
      </Box>
    </Box>
  );
}
