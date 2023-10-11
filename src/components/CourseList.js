// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { setCourses, selectCourses } from '../app/features/courseSlice';

// const CourseList = () => {
//   const dispatch = useDispatch();
//   const courses = useSelector(selectCourses);

//   useEffect(() => {
//     fetch('http://127.0.0.1:3000/api/courses')
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(setCourses(data));
//       })
//       .catch((error) => console.error('Error fetching courses:', error));
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Course List</h1>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.id}>
//             <h2>{course.name}</h2>

//             <Link to={`/courses/${course.id}`}>
//               <button type="button">View Details</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseList;
