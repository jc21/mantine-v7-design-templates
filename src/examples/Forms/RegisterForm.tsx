import {
  Anchor,
  Box,
  Button,
  Paper,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import classes from "./RegisterForm.module.css";

export function RegisterForm() {
  return (
    <Box className={classes.wrapper} py={16}>
      <Title order={1} fw="bolder">
        Mantine Site
      </Title>
      <Text c="dimmed" size="sm" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" href="/login">
          Log in
        </Anchor>
      </Text>
      <Box w={400}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="test@example.com" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Space h="md" />
          <Button fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
