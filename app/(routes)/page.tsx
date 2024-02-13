import Shortcuts from "@/components/text/shortcuts";
import Test from "@/components/text/test";

const HomePage = () => {
  return (
    <div className="grid grid-rows-3 h-full w-full">
      {/* Settings for test */}
      <div className="flex items-center justify-center">
        {/* TODO: Settings bar */}
      </div>

      {/* Test itself */}
      <div className="flex items-center justify-center">
        <Test />
      </div>

      {/* Socials and shortcuts / Footer */}
      <div className="flex items-center justify-center">
        <Shortcuts />
      </div>
    </div>
  );
};

export default HomePage;
