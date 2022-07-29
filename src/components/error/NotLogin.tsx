import { Button, Center, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";

export function NotLogin() {
  return (
    <Center mt="30vh">
      <Stack >
        
        <Text textAlign="center" fontSize={200}>403</Text>
        <Text fontSize={40}>Você não está logado!!!</Text>
        <Link href="/">
          <Button colorScheme="teal" h="2.5rem" fontSize={"1.3rem"}>
            Voltar
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}
