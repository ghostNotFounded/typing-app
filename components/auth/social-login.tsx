import SocialButton from "./social-button";

import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <div>
        <h1 className="font-bold text-xl md:text-4xl">
          Welcome <span className="italic text-teal">OR</span> welcome back{" "}
          <span className="text-teal">:D</span>
        </h1>
        <p className="text-xs md:text-sm">
          You need to login to avail our features
        </p>
      </div>

      <SocialButton first>
        <FaGoogle size={20} />
        <span>Continue with Google</span>
      </SocialButton>

      <SocialButton>
        <FaGithub size={20} />
        <span>Continue with GitHub</span>
      </SocialButton>
    </div>
  );
};

export default SocialLogin;
