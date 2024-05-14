import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Sidebar = ({className}: Props) => {
  return (
    <aside className={cn(
      "flex bg-blue-300 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className
    )}>
      Sidebar
    </aside>
  );
};

export default Sidebar;