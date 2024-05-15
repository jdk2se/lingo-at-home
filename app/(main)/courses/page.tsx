import { getCourses, getUserPorgress } from "@/db/queries";
import CoursesList from "@/app/(main)/courses/list";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserPorgress();
  
  const [ courses, userProgress ] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Courses
      </h1>
      <CoursesList 
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;