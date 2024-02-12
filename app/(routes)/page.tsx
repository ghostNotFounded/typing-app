import Shortcuts from "@/components/text/shortcuts";

const HomePage = () => {
  return (
    <div className="grid grid-rows-3 bg-pink-900 h-full">
      {/* Settings for test */}
      <div className="flex items-center justify-center">
        {/* TODO: Settings bar */}
      </div>

      {/* Test itself */}
      <div className="flex items-center justify-center">
        {/* TODO: Test API and calls */}
      </div>

      {/* Socials and shortcuts / Footer */}
      <div className="flex items-center justify-center">
        <Shortcuts />
      </div>
    </div>
  );
};

export default HomePage;
