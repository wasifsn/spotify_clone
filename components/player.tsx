import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Center,
  RangeSliderTrack,
} from '@chakra-ui/react';

import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';

import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md';

import { useStoreActions } from 'easy-peasy';

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setshuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (value) => {
    setPlaying(value);
  };
  const onShuffle = () => {
    setshuffle((state) => !state);
  };
  const onRepeat = () => {
    setRepeat((state) => !state);
  };
  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            onClick={onShuffle}
            outline="none"
            variant="link"
            aria-label="shuffle"
            color={shuffle ? 'white' : 'gray.600'}
            fontSize="24px"
            icon={<MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          {!playing ? (
            <IconButton
              onClick={() => setPlayState(true)}
              outline="none"
              variant="link"
              aria-label="play"
              color="white"
              fontSize="40px"
              icon={<MdOutlinePlayCircleFilled />}
            />
          ) : (
            <IconButton
              onClick={() => setPlayState(false)}
              outline="none"
              variant="link"
              aria-label="pause"
              color="white"
              fontSize="40px"
              icon={<MdOutlinePauseCircleFilled />}
            />
          )}

          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            onClick={onRepeat}
            outline="none"
            variant="link"
            aria-label="repeat"
            color={repeat ? 'white' : 'gray.600'}
            fontSize="24px"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="x-small">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600"></RangeSliderFilledTrack>
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">4.50</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
