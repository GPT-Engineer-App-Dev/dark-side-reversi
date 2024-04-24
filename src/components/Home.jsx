import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box textAlign="center" p="5">
      <Heading>Welcome to Othello Game</Heading>
      <Text fontSize="xl" my="4">Enjoy playing the classic Othello game against the computer or with a friend.</Text>
      <Button colorScheme="blue" as={RouterLink} to="/game">Start Game</Button>
    </Box>
  );
}

export default Home;