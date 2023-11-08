import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./SiteHeader.module.css";

const links = [
	{ link: "/forms", label: "Forms" },
	{ link: "/menus", label: "Menus" },
	{ link: "/cards", label: "Cards" },
	{ link: "/lists", label: "Lists" },
];

function SiteHeader() {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={classes.link}
			onClick={(event) => {
				event.preventDefault();
			}}>
			{link.label}
		</a>
	));

	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				Logo
				<Group gap={5} visibleFrom="xs">
					{items}
				</Group>
				<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
			</Container>
		</header>
	);
}

export { SiteHeader };
