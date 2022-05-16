import { Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
import { useMe } from '../lib/hooks';

const Home = ({ artists }) => {
  const { user, isLoading, error } = useMe();
  return (
    <GradientLayout
      roundImage
      color="green"
      title={`${user?.firstName} ${user?.lastName}`}
      subtitle="Profile"
      description={`${user?.playlistsCount} public playlist`}
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Box fontSize="2xl">Top Artists this month</Box>
          <Box fontSize="md">Only visible to you</Box>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box
                key={artist.id}
                bg="gray.900"
                borderRadius="4px"
                padding="15px"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0014/2648/9388/products/funimation-placeholder-dvd-one-piece-collection-2-29850246086700_2000x2000.jpg?v=1647462335"
                  borderRadius="100%"
                />
                <Box marginTop="10px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
