import {ActivityIndicator, FlatList, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Box, Heading, AspectRatio, Stack } from 'native-base';
import formatDate from '../utils/utils';

export const NewsFlatList = ({data, loading, error, dummyImageUrl, navigation}) => {
    
    const renderItem = ({item}) => {
        return (
          <TouchableOpacity 
          style={{flex: 1, margin: 5}}
          onPress={() => navigation.navigate('Web', {url: item.url, title: item.source.name})}
          >
            <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="white">
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <ImageBackground 
                    source={{uri: item.urlToImage === null ? dummyImageUrl : item.urlToImage}} 
                    alt="image" />
                  </AspectRatio>
                </Box>
                <Stack pt="4" pl="4">
                  <Text color="gray" fontWeight="800">
                     {item.source.name}
                  </Text>
                </Stack>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                    {item.title}
                    </Heading>
                  </Stack>
                </Stack>
                <Stack pb="4" pl="4">
                  <Text color="coolGray.600" fontWeight="400">
                      {formatDate(item.publishedAt)}
                  </Text>
                </Stack>
            </Box>
          </TouchableOpacity>
        );
    };
    
    return (
    <View style={{flex: 1, padding: 10}}>
        {loading ? (
        <ActivityIndicator />
        ) : (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
        />
        )}
    </View>
    );

}