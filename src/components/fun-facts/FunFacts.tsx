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
       <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
         <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Finosell Global Ltd {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>August 2022 - September 2022</Text>
          <Text color={CardText}>I worked on the business management dashboard and added payment, order,invoices and team management. 
</Text>
          <Text color={CardText}>I added printout functionality to print both  invoice and receipt  for the desktop application.
</Text>
          
      </Stack>
      </Box>
          <Box bg={CardBg} borderRadius="lg" mt={8} p={8}  position="relative">
      <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            DetlaStack
          </Text>
           <chakra.span color={CardText} fontWeight="bold" className="wrap">Frontend Developer</chakra.span>
        <Text fontWeight="bold" color={HighlightText}>April 2022 - July 2022</Text>
        <Text fontWeight="bold" color={CardText}>Frontend Developer</Text>
        <Text color={CardText}>
          I kickstart the design and APIs implementation for Cryptofundme,I added the APIs for authentication for users and also for campaign and donation. 
          </Text>
           <Text color={CardText}>
         I converted Figma designs to pixel perfect, reusable Typescript/React components. 
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
          <Text color={CardText}>Worked on creating the dashboard to manage both personal and business accounts.
</Text>
          <Text color={CardText}>I help create account authentication for business and personal accounts.</Text>
          
      </Stack>
      </Box>

      <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
        
    <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Zebullon Developer Network {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">UI/UX Intern</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>March 2018 - April 2018
</Text>
          <Text fontWeight="bold" color={CardText}>UI/UX Intern</Text>
        <Text color={CardText}>Help create a UI design and prototype  mockup in Adobe XD </Text>
      </Stack>
    </Box>
      </>
  );
};
