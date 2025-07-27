import {createContext, useEffect, useState} from 'react';
const CourseContext: any = createContext(undefined);

function CourseProvider({children}: any) {
  const [courseData, setCourseData] = useState<any>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let data: any = localStorage.getItem('courseData');
      data = JSON.parse(data);
      setCourseData(data);
    }
  }, []);
  return (
    <CourseContext.Provider value={courseData}>
      {children}
    </CourseContext.Provider>
  );
}
export {CourseProvider, CourseContext};
