import { baseURL, apiKey, dummyImageUrl } from '../api/client'
import { useFetch } from '../api/useFetch'
import { NewsFlatList } from '../components/NewsFlatList';

const HomeScreen = ({navigation}) => {
  const {data, loading, error } = useFetch(baseURL+'/top-headlines?country=us&apiKey='+apiKey)
  return (
    <NewsFlatList 
      data={data} 
      loading={loading} 
      error={error} 
      dummyImageUrl={dummyImageUrl}
      navigation={navigation}
      />
  )
};

export default HomeScreen;