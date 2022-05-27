import { Box, Stack, Text,Heading,Center, Link } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";

// import Image from "next/image";

export const FunFacts = () => {
  const CardText = useColorModeValue("gray.500", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");
  const CardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
     <Center w="100%" pt={15} pb={10}>
      <Heading size="lg" letterSpacing="0.1rem" as="h1" color="gery">
      WORK EXPERIENCE
        </Heading>
         
      </Center>
          <Box bg={CardBg} borderRadius="lg" mt={8} p={8}  position="relative">
      <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            DetlaStack
          </Text>
           <chakra.span color={CardText} fontWeight="bold" className="wrap">Frontend Developer</chakra.span>
        <Text fontWeight="bold" color={HighlightText}>March 2022 - Present</Text>
        <Text fontWeight="bold" color={CardText}>Frontend Developer</Text>
        <Text color={CardText}>
          Building and Maintaining Scalable Design For Web3 Application with JavaScript/Typescript/React/NextJs{" "}
        </Text>
      </Stack>
      </Box>

      <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
         <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Finosell Global Ltd {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>Jan 2022 - March 2022</Text>
          <Text color={CardText}>Create and design clients-side , with React/Redux/Chakra UI</Text>
          <Text color={CardText}>Also Implement APIs functionality across the pages</Text>
      </Stack>
      </Box>

      <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
        
    <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Zebullon Developer Network {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer Intern</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>March 2021 - Decemeber 2021</Text>
          <Text fontWeight="bold" color={CardText}>Frontend Developer Intern</Text>
        <Text color={CardText}>Create and design clients-side application websites, with React/Redux/Sass</Text>
      </Stack>
    </Box>
      </>
  );
};
