import { Title } from "@mantine/core";

import { Example, ExampleItem } from "src/components";
import { ForgotPassword } from "src/examples/Forms/ForgotPassword";
import { LoginForm } from "src/examples/Forms/LoginForm";
import { RegisterForm } from "src/examples/Forms/RegisterForm";

const items: ExampleItem[] = [
  {
    title: "Login",
    component: <LoginForm />,
    files: [
      {
        source: (await import("src/examples/Forms/LoginForm.tsx?raw")).default,
        sourceFilename: "LoginForm.tsx",
        type: "tsx",
      },
      {
        source: (await import("src/examples/Forms/LoginForm.module.css?raw"))
          .default,
        sourceFilename: "LoginForm.module.css",
        type: "css",
      },
    ],
  },
  {
    title: "Register",
    component: <RegisterForm />,
    files: [
      {
        source: (await import("src/examples/Forms/RegisterForm.tsx?raw"))
          .default,
        sourceFilename: "RegisterForm.tsx",
        type: "tsx",
      },
      {
        source: (await import("src/examples/Forms/RegisterForm.module.css?raw"))
          .default,
        sourceFilename: "RegisterForm.module.css",
        type: "css",
      },
    ],
  },
  {
    title: "Forgot Password",
    component: <ForgotPassword />,
    files: [
      {
        source: (await import("src/examples/Forms/ForgotPassword.tsx?raw"))
          .default,
        sourceFilename: "ForgotPassword.tsx",
        type: "tsx",
      },
      {
        source: (
          await import("src/examples/Forms/ForgotPassword.module.css?raw")
        ).default,
        sourceFilename: "ForgotPassword.module.css",
        type: "css",
      },
    ],
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
