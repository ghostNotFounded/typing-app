import Link from "next/link";

import Logo from "@/components/ui/logo";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import ProfileLinks from "./profile-links";

const Navbar = () => {
  return (
    <Container>
      <header className="h-16 flex items-end justify-between">
        <div className="flex items-end space-x-10">
          <Link href="/">
            <Logo />
          </Link>

          {/* Main navigation links */}
          <MainNav />
        </div>

        {/* Profile links */}
        <ProfileLinks />
      </header>
    </Container>
  );
};

export default Navbar;
