import {
  Box,
  Center,
  Container,
  Group,
  Burger,
  HoverCard,
  useMantineColorScheme,
  useComputedColorScheme,
  UnstyledButton,
  SimpleGrid,
  Text,
  ThemeIcon,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  FiMoon,
  FiSun,
  FiCode,
  FiAlertTriangle,
  FiBook,
  FiMinimize,
  FiChevronDown,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Logo } from "src/components";

import classes from "./SiteHeader.module.css";

const pages = [
  {
    icon: FiCode,
    title: "Menus",
    description: "Menus for your app or site",
    to: "/menus",
  },
  {
    icon: FiAlertTriangle,
    title: "Forms",
    description: "Form examples and layouts",
    to: "/forms",
  },
  {
    icon: FiBook,
    title: "Lists",
    description: "List data in different ways",
    to: "/lists",
  },
  {
    icon: FiMinimize,
    title: "Cards",
    description: "Use cards to show data in unique ways",
    to: "/cards",
  },
];

function SiteHeader() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const links = pages.map((page) => (
    <UnstyledButton
      className={classes.subLink}
      key={page.title}
      onClick={(e: any) => {
        e.preventDefault();
        navigate(page.to);
      }}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <page.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {page.title}
          </Text>
          <Text size="xs" c="dimmed">
            {page.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <UnstyledButton
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}>
          <Logo style={{ width: rem(120) }} />
        </UnstyledButton>
        <Group gap={5} visibleFrom="sm">
          <a
            href="/"
            className={classes.link}
            onClick={(e: any) => {
              e.preventDefault();
              navigate("/");
            }}>
            Home
          </a>
          <HoverCard
            width={600}
            position="bottom"
            radius="md"
            shadow="md"
            withinPortal>
            <HoverCard.Target>
              <a href="#" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Elements
                  </Box>
                  <FiChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </a>
            </HoverCard.Target>

            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
              <SimpleGrid cols={2} spacing={8}>
                {links}
              </SimpleGrid>
            </HoverCard.Dropdown>
          </HoverCard>
          <a
            href="#"
            className={classes.link}
            onClick={(e) => {
              e.preventDefault();
              setColorScheme(
                computedColorScheme === "light" ? "dark" : "light",
              );
            }}>
            {computedColorScheme === "light" ? <FiMoon /> : <FiSun />}
          </a>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export { SiteHeader };
