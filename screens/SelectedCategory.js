import React from 'react';
import { baseURL, apiKey, dummyImageUrl } from '../api/client'
import { useFetch } from '../api/useFetch'
import { NewsFlatList } from '../components/NewsFlatList';

const SelectedCategory = ({navigation, route}) => {
  const { title } = route.params
  navigation.setOptions({title: title})
  const {data, loading, error } = useFetch(baseURL+'/top-headlines?category='+title+'&language=en&apiKey='+apiKey)

  return (
    <NewsFlatList 
      data={data} 
      loading={loading} 
      error={error} 
      dummyImageUrl={dummyImageUrl}
      navigation={navigation}
    />
  )
}
export default SelectedCategory;
