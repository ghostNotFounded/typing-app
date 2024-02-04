import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Image src={"/Logo.png"} width={100} height={100} alt="Hello" />
    </div>
  );
};

export default HomePage;
