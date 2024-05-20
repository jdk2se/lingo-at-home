import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/user-progress";
import { getUserPorgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserPorgress();
  
  const [ 
    userProgress,
  ] = await Promise.all([userProgressData]);
  
  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');  
  }
  
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;