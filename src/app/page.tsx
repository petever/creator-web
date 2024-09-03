import {Button, Container, Grid, Input} from "@mantine/core";

export const metadata = {
  title: "크리에이터 구독",
};

export default function Page() {
  return (
    <Container>
      <Input size="md" radius="md" placeholder="Login" />
      <Button variant="filled" color="lime" size='md' fullWidth>LOGIN</Button>
    </Container>
  );
}
