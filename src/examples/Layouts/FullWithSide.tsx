import { ReactNode, useState } from "react";

import {
  ActionIcon,
  Anchor,
  AppShell,
  Avatar,
  Box,
  Burger,
  Collapse,
  Drawer,
  Flex,
  Group,
  ScrollArea,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  useDirection,
  useMantineColorScheme,
  useMantineTheme,
  type UnstyledButtonProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronLeft,
  IconChevronRight,
  IconComponents,
  IconDashboard,
  IconLock,
  IconMoodSmile,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

import classes from "./FullWithSide.module.css";

interface NavItem {
  label: string;
  // icon: (props: TablerIconsProps) => JSX.Element;
  icon: any;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const navLinks: NavItem[] = [
  { label: "Dashboard", icon: IconDashboard, link: "/dashboard" },

  {
    label: "Components",
    icon: IconComponents,
    initiallyOpened: true,
    links: [
      {
        label: "Table",
        link: "/dashboard/table",
      },
      {
        label: "Form",
        link: "/dashboard/form",
      },
    ],
  },
  {
    label: "Auth",
    icon: IconLock,
    initiallyOpened: true,
    links: [
      {
        label: "Login",
        link: "/login",
      },
      {
        label: "Register",
        link: "/register",
      },
    ],
  },
  {
    label: "Sample",
    icon: IconMoodSmile,
    initiallyOpened: true,
    links: [
      {
        label: "Landing",
        link: "/",
      },
    ],
  },
];

export function NavLinksGroup({
  icon: Icon,
  label,
  link,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const { dir } = useDirection();

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => {
    return (
      <Anchor href={link.link} key={link.label} className={classes.link}>
        {link.label}
      </Anchor>
    );
  });

  return (
    <>
      {link ? (
        <Anchor href={link} className={classes.control}>
          <Group gap={0} justify="space-between">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </Anchor>
      ) : (
        <UnstyledButton
          onClick={() => {
            if (hasLinks) {
              setOpened((o) => !o);
              return;
            }
          }}
          className={classes.control}>
          <Group gap={0} justify="space-between">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size="1rem"
                stroke={1.5}
                style={{
                  transform: opened
                    ? `rotate(${dir === "rtl" ? -90 : 90}deg)`
                    : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
}
export function UserButton({ image, name, email }: UserButtonProps) {
  return (
    <UnstyledButton className={classes.user}>
      <Flex direction="row" gap={8}>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" w={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>
      </Flex>
    </UnstyledButton>
  );
}

interface NavbarProps {
  data: NavItem[];
  hidden?: boolean;
}
export function Navbar({ data }: NavbarProps) {
  const links = data.map((item) => (
    <NavLinksGroup key={item.label} {...item} />
  ));

  return (
    <>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Harriette"
          email="hspoon@outlook.com"
        />
      </div>
    </>
  );
}

interface AdminHeaderProps {
  burger?: React.ReactNode;
}
export function AdminHeader({ burger }: AdminHeaderProps) {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      {burger && burger}
      <Logo />
      <Box style={{ flex: 1 }} />
      <TextInput
        placeholder="Search"
        variant="filled"
        leftSection={<IconSearch size="0.8rem" />}
        style={{}}
      />
      <ActionIcon onClick={open} variant="subtle">
        <IconSettings size="1.25rem" />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={close}
        title="Settings"
        position="right"
        transitionProps={{ duration: 0 }}></Drawer>
    </header>
  );
}

interface LogoProps {
  width?: string;
  height?: string;
}
export const Logo: React.FC<LogoProps> = () => {
  return (
    <Flex direction="row" align="center" gap={4}>
      <Anchor
        href="/"
        style={{ textDecoration: "none" }}
        className={classes.heading}>
        <Text fw="bolder" size="xl">
          Mantine
          <Text component="span" fw="normal" className={classes.subheading}>
            Admin
          </Text>
        </Text>
      </Anchor>
    </Flex>
  );
};

interface Props {
  children?: ReactNode;
}
export function FullWithSide({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease">
      <AppShell.Navbar>
        <Navbar data={navLinks} hidden={!opened} />
      </AppShell.Navbar>
      <AppShell.Header>
        <AdminHeader
          burger={
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              mr="xl"
            />
          }
        />
      </AppShell.Header>
      <AppShell.Main bg={bg}>{children}</AppShell.Main>
      <AppShell.Footer>
        <Text w="full" size="sm" c="gray">
          CopyRight © 2024 Your Name
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
