import {useAxiosSWR} from "../../common/hooks/useAxiosSWR";
import {API_COURSES} from "../../common/api-route.ts/api-route";

export function useFetchCourses(params: any = null) {
    return useAxiosSWR([API_COURSES, params]);
}


export function useFetchCourse(courseId: number | null) {
    return useAxiosSWR(courseId ? API_COURSES + '/' + courseId : null);
}