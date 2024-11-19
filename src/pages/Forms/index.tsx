import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { LoginForm } from "src/examples/Forms/LoginForm";
import { RegisterForm } from "src/examples/Forms/RegisterForm";

const items: ExampleItem[] = [
  {
    title: "Login",
    component: <LoginForm />,
    source: (await import("src/examples/Forms/LoginForm.tsx?raw")).default,
    sourceFilename: "LoginForm.tsx",
    sourceCss: (await import("src/examples/Forms/LoginForm.module.css?raw"))
      .default,
    sourceCssFilename: "LoginForm.module.css",
  },
  {
    title: "Register",
    component: <RegisterForm />,
    source: (await import("src/examples/Forms/RegisterForm.tsx?raw")).default,
    sourceFilename: "RegisterForm.tsx",
    sourceCss: (await import("src/examples/Forms/RegisterForm.module.css?raw"))
      .default,
    sourceCssFilename: "RegisterForm.module.css",
  },
];

function Forms() {
  const components = items.map((item, idx) => (
    <Example key={idx} item={item} />
  ));

  return (
    <>
      <Title order={1} my="xl">
        Forms
      </Title>
      {components}
    </>
  );
}

export default Forms;
