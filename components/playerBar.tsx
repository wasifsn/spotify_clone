import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Td,
  Tr,
  Tbody,
  IconButton,
  Th,
  transition,
} from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { formatDate, formatTime } from '../lib/formatters';

const PlayerBar = ({ songs }) => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="20px" color="white" width="30%">
          <Text fontSize="large">blinding lights</Text>
          <Text fontSize="small">Weeknd</Text>
        </Box>
        <Box width="40%">Controls</Box>
        <Box width="30%">right side</Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
