import React from 'react';
import { FlatList, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Box, Heading, AspectRatio, Stack } from 'native-base';


function Category ({navigation}) {

  const newsList = [
      {
        id: '1',
        title: 'Business',
        image: require('../img/business.jpg'),
        icon: 'logo-usd'
      },
      {
        id: '2',
        title: 'Entertainment',
        image: require('../img/entertainment.jpg'),
        icon: 'ios-film'
      },
      {
        id: '3',
        title: 'Health',
        image: require('../img/health.jpg'),
        icon: 'ios-medkit'
      },
      {
        id: '4',
        title: 'Science',
        image: require('../img/science.jpg'),
        icon: 'md-flask'
      },
      {
        id: '5',
        title: 'Sports',
        image: require('../img/sports.jpg'),
        icon: 'md-football'
      },
      {
        id: '6',
        title: 'Technology',
        image: require('../img/technology.jpg'),
        icon: 'ios-phone-portrait'
      },
     
    ]

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity 
      style={{flex: 1, margin:5}}
      onPress={() => navigation.navigate('Selected Category', {title: item.title})}
      >
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="white">
            <Box>
              <AspectRatio w="100%">
                <ImageBackground source={item.image} alt="image" />
              </AspectRatio>
            </Box>
            <Stack p="4">
              <Stack>
                <Heading size="sm" ml="-1">
                {item.title}
                </Heading>
              </Stack>
            </Stack>
        </Box>
      </TouchableOpacity>
    );
  };

     // FlatList  ====================================================
    return (
      <View style={{ flex: 1, padding: 10}}>
        <FlatList
          data={newsList}
          renderItem={renderItem}
          numColumns={2}
         />
      </View>
    );
  
}

export default Category;
