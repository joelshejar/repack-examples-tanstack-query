import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';

const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};

const DataComponent = () => {
  const { data, error, isLoading } = useQuery(['dataKey'], fetchData);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  return <Text>{JSON.stringify(data)}</Text>;
};

export default DataComponent
