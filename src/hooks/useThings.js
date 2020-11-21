import {useFocusEffect} from '@react-navigation/native';
import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import uniqBy from 'lodash-es/uniqBy';
import {useCallback, useContext, useState} from 'react';
import LoaderContext from '../contexts/LoaderContext';
import ThingContext from '../contexts/ThingContext';
import * as queries from '../graphql/queries';

const useThings = (variables) => {
  const {things, setThings} = useContext(ThingContext);
  const {setLoading} = useContext(LoaderContext);
  const [pageNextToken, setPageNextToken] = useState(null);

  const fetchFirst = async (nextToken = null) => {
    setLoading(true);
    try {
      let response = await API.graphql({
        query: queries.thingsByDate,
        variables: {
          ...variables,
          nextToken,
        },
        authMode: 'API_KEY',
      });
      setThings((t) =>
        uniqBy([...t, ...get(response, 'data.thingsByDate.items', [])], 'id'),
      );
      setPageNextToken(get(response, 'data.thingsByDate.nextToken', null));
      setLoading(false);
    } catch (error) {
      console.log({q: JSON.stringify(error)});
    }
  };

  const fetchNext = () => fetchFirst(pageNextToken);

  useFocusEffect(
    useCallback(() => {
      fetchFirst();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return {things, hasNext: Boolean(pageNextToken), fetchNext};
};

export default useThings;
