import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Container,
  Stack,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

const Uses = () => {
    return (
        <Container maxW="container.lg" pt="4rem">
            <Center h="100%" minH="75vh">
                <Stack w="100%">
                    <Heading>Uses</Heading>
                    <Text>My setup changes from time to time. Will try to keep this page updated.😁
                    </Text>
                     <Box pb={5}>
                    <Stack spacing={4}>
                        <Heading pb={3}>System</Heading>
                        <Text>🖥Linux ( Acer with 32 GB Memory )</Text>
                        <Text></Text>
                        <Heading pb={3}>Dev Environment</Heading>
                        <Text>👨‍💻VS Code</Text>
                        <Text>👨‍💻Nvim</Text>
                        <Text>🕹Fish</Text>
                        <Text>🕹Bash</Text>
                        <Text>🎨Neo Solarize</Text>
                        <Text>📦NPM</Text>
                        <Heading pb={3}>Browsers</Heading>
                        <Text>🐸Google Chrome</Text>
                        <Text>🔥Firefox</Text>
                    </Stack>
                    </Box>
                </Stack>
            </Center>
        </Container>
    );
};

export default Uses;












