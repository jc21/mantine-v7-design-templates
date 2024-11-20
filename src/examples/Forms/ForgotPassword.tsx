import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Group,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { FiChevronLeft } from "react-icons/fi";

import classes from "./ForgotPassword.module.css";

export function ForgotPassword() {
  return (
    <Box className={classes.wrapper} py={16}>
      <Title order={1} fw="bolder">
        Forgot your password?
      </Title>
      <Text c="dimmed" size="sm" mt={5}>
        Enter your email to get a reset link
      </Text>
      <Box w={400}>
        <Card withBorder shadow="md" p={30} mt={30} radius="md">
          <form>
            <TextInput label="Your email" type="email" name="email" required />
            <Group justify="space-between" mt="lg">
              <Anchor c="dimmed" size="sm">
                <Center inline>
                  <FiChevronLeft />
                  <Box ml={5}>Back to login page</Box>
                </Center>
              </Anchor>
              <Button type="submit">Reset password</Button>
            </Group>
          </form>
        </Card>
      </Box>
    </Box>
  );
}
