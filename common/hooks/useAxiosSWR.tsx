import useSWR from 'swr';
import {apiGet} from '../api-route.ts/apiOperation';

function common<T = any>({mutate, error, data: responseData}: any) {
  const {data: {data = undefined, ...metaData} = {}} = responseData || {};

  return {
    data,
    metaData,
    isLoading: !data && !error,
    mutate,
    error,
  };
}

export function useAxiosSWR<T = any>(deps: any[] | string | null) {
  return common<T>(
    useSWR(deps, (url: any, params: any) => apiGet(url, {params})),
  );
}
