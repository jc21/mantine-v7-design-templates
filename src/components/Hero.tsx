import { ReactNode } from "react";

import { Title, Text, Container } from "@mantine/core";

import classes from "./Hero.module.css";

interface Props {
	title: ReactNode;
	subTitle?: ReactNode;
	children?: ReactNode;
}
function Hero({ title, subTitle, children }: Props) {
	return (
		<Container className={classes.wrapper} size={1400}>
			<div className={classes.inner}>
				<Title className={classes.title}>{title}</Title>
				{subTitle ? (
					<Container p={0} size={600}>
						<Text size="lg" c="dimmed" className={classes.description}>
							{subTitle}
						</Text>
					</Container>
				) : null}
				{children ? <div className={classes.children}>{children}</div> : null}
			</div>
		</Container>
	);
}

export { Hero };
