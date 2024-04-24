import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" bg="brand.800" color="white" padding="1rem" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" p="2" _hover={{ textDecoration: 'none', bg: 'brand.700' }}>Home</Link>
        <Link as={RouterLink} to="/game" p="2" _hover={{ textDecoration: 'none', bg: 'brand.700' }}>Game</Link>
      </Box>
    </Flex>
  );
}

export default Navigation;