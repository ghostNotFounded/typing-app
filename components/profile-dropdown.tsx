interface ProfileDropdownProps {
  open: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ open }) => {
  return (
    <div
      className={`overflow-hidden absolute bg-teal rounded-md text-black min-w-[150px] top-8 right-0 ${
        open ? "py-2" : "h-0 py-0"
      }`}
    >
      <span className="font-semibold px-2">Profile</span>
      <hr className="my-1 border-black w-[90%] mx-auto" />

      <ul>
        <li className="py-2 cursor-pointer hover:bg-[#b28800] w-full px-2">
          Sign up
        </li>
        <li className="py-2 cursor-pointer hover:bg-[#b28800] w-full px-2">
          Sign in
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
