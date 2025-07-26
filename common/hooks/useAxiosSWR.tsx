import {apiGet} from "../api-route.ts/api-route.ts";
import useSWR from "swr";

function common<T = any>({
                             mutate,
                             error,
                             data: responseData,

                         }: any) {
    const {data: {data = undefined, ...metaData} = {}} = responseData || {};

    return {
        data,
        metaData,
        isLoading:  !data && !error,
        mutate,
        error,

    };
}

export function useAxiosSWR<T = any>(deps: any[] | string | null) {
    return common<T>(useSWR(deps, (url, params) => apiGet(url, {params})));
}