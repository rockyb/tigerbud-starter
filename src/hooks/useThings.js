import {useFocusEffect} from '@react-navigation/native';
import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import uniqBy from 'lodash-es/uniqBy';
import {useCallback, useContext, useState} from 'react';
import LoaderContext from '../contexts/LoaderContext';
import ThingContext from '../contexts/ThingContext';
import * as queries from '../graphql/queries';

/**
 * Hook to query for thingsByDate, puts the things into the ThingContext and returns pagination info
 *
 * @param {object} variables - query variables i.e. limit, filters etc
 */
const useThings = (variables) => {
  const {things, setThings} = useContext(ThingContext);
  const {setLoading} = useContext(LoaderContext);
  const [pageNextToken, setPageNextToken] = useState(null);

  /**
   * Retrieve a page of things. If nextToken is null retrieves first page
   *
   * @param {string} nextToken
   */
  const fetchPage = async (nextToken = null) => {
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
      console.error({error});
    }
  };

  /**
   * Fetches next page or first page if pageNextToken is null
   */
  const fetchNext = () => fetchPage(pageNextToken);

  /**
   * On focus of the component calling the hook load up the first page into the ThingContext
   */
  useFocusEffect(
    useCallback(() => {
      fetchPage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return {things, hasNext: Boolean(pageNextToken), fetchNext};
};

export default useThings;
