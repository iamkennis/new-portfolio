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
             RotaPad
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Full Stack Developer</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>May 2023 - December 2023 </Text>
            <Text fontWeight="bold" color={CardText}>Full-time | Remote</Text>
          <Text color={CardText}>Collaborated with designers to revamp the company dashboard UI, enhancing UX and data visualization, leading to a 15% increase in data driven decision making</Text>
          <Text color={CardText}>Rewrote and optimized backend code, improving code quality, maintainability, and security, reducing codebase complexity by 20%.</Text>
      </Stack>
      </Box>
       <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
         <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            HealthStack Solution Ltd {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>November 2022 - May 2023 </Text>
            <Text fontWeight="bold" color={CardText}>Full-time | Remote</Text>
          <Text color={CardText}>Designed and Developed about 12+ figma pages designs of dashboard to onboard EMR, Patients and HMOs  and also connected them to the necessary backend endpoints .
</Text>
          <Text color={CardText}>Implement  payment integration like  paystack,remita/pouchii  and flutterware for patients to make any payment.</Text>
          
      </Stack>
      </Box>
       <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
         <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Finosell Global Ltd {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>August 2022 - September 2022</Text>
            <Text fontWeight="bold" color={CardText}>Contract | Remote</Text>
          <Text color={CardText}>Worked on the business management dashboard and added payment, order,invoices and team management. 
</Text>
          <Text color={CardText}>Added printout functionality to print both  invoice and receipt  for the desktop application.
</Text>
          
      </Stack>
      </Box>
          <Box bg={CardBg} borderRadius="lg" mt={8} p={8}  position="relative">
      <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            DetlaStack {""}
           <chakra.span color={CardText} fontWeight="bold" className="wrap">Frontend Developer</chakra.span>
          </Text>
          
        <Text fontWeight="bold" color={HighlightText}>April 2022 - July 2022</Text>
        <Text fontWeight="bold" color={CardText}>Full-Time | Remote</Text>
        <Text color={CardText}>
          Implement the design and APIs implementation for Cryptofundme,I added the APIs for authentication for users and also for campaign and donation. 
          </Text>
           <Text color={CardText}>
         Converted Figma designs to pixel perfect, reusable Typescript/React components. 
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
            <Text fontWeight="bold" color={CardText}>Full-Time | Onsite</Text>
          <Text color={CardText}>Worked on creating the dashboard to manage both personal and business accounts.
</Text>
          <Text color={CardText}>Help create account authentication for business and personal accounts.</Text>
          
      </Stack>
      </Box>

      <Box bg={CardBg} borderRadius="lg" mt={8} p={8} position="relative">
        
    <Stack>
        <Text fontWeight="bold" pb={4} letterSpacing="0.1rem">
            Zebullon Developer Network {""}
            <chakra.span color={CardText} fontWeight="bold" className="no-wrap">Frontend Developer Intern</chakra.span>
        </Text>
          <Text fontWeight="bold" color={HighlightText}>August 2021 - October 2021

</Text>
           <Text fontWeight="bold" color={CardText}>Full-Time | Remote</Text>
        <Text color={CardText}>Help convert  mockups design with Html/Css/Javascripts</Text>
       <Text color={CardText}>Build email template from figma designs</Text>
      </Stack>
    </Box>
      </>
  );
};
