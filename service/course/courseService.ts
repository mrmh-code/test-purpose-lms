import {
  apiDelete,
  apiPost,
  apiPut,
} from '../../common/api-route.ts/apiOperation';

export const createCourse = async (data: any) => {
  let response: any = await apiPost('', data);
  return response.data;
};

export const updateCourse = async (courseId: number, data: any) => {
  let response: any = await apiPut('' + '/' + courseId, {
    ...data,
    updated_id: courseId,
  });
  return response.data;
};

export const deleteCourse = async (courseId: number) => {
  let response: any = await apiDelete('' + '/' + courseId);
  return response.data;
};
