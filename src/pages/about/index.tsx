import React, {useContext} from 'react';
import {CourseContext} from '../../../common/context/CourseContext';

const About = () => {
  const courseData: any = useContext(CourseContext);

  return (
    <div>
      <h1>Total Course: {courseData?.length ?? '0'} </h1>
    </div>
  );
};

export default About;
