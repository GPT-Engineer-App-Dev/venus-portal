import { Box, VStack, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { FaTrophy, FaCamera } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Heading as="h1" size="2xl" textAlign="center">Venus Williams</Heading>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl">Biography</Heading>
        <Text mt={4}>
          Venus Ebony Starr Williams is an American professional tennis player. A former world No. 1
          in both singles and doubles, Williams has won seven Grand Slam singles titles and fourteen
          Grand Slam doubles titles, all with her sister Serena Williams.
        </Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl">Career Achievements <FaTrophy /></Heading>
        <SimpleGrid columns={2} spacing={10} mt={4}>
          <Box shadow="md" p={5} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">Olympic Gold Medals</Text>
            <Text>Four Olympic gold medals (2000, 2008, 2012)</Text>
          </Box>
          <Box shadow="md" p={5} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">Grand Slam Titles</Text>
            <Text>Seven singles titles and fourteen doubles titles</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl">Gallery <FaCamera /></Heading>
        <SimpleGrid columns={3} spacing={5} mt={4}>
          <Image src="https://example.com/image1.jpg" alt="Venus Williams Action Shot" />
          <Image src="https://example.com/image2.jpg" alt="Venus Williams Winning Moment" />
          <Image src="https://example.com/image3.jpg" alt="Venus Williams with Trophy" />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Index;