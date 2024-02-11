import { Banana } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Banana size={32} className="text-teal" />

      <div className="hidden flex-col -space-y-1 md:flex">
        <span className="text-xs">eat banana</span>
        <span className="text-teal text-2xl font-bold">speedbanana</span>
      </div>
    </div>
  );
};

export default Logo;
