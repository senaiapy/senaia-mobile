import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);

  return { data, error, isFetching };
}

/*
import { useFetch } from '@hooks/useCrud';

type Repository = {
    full_name: string;
    descriptions: string;
}

funcAPP... (
    const {data: repositories, isFetching} = useFetch<Repository[]>('https://api.github.com/users/pyfundation/repos');
    { isfetching && <View> <Text>Cargando</Text> </View>}
    {repositories?.map( repo => {
        return (
            <Text>{repo.full_name}</Text>
            <Text>{repo.description}</Text>
        )
        })}
)
*/
