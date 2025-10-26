import { Navbar, PatternWrapper } from "@/components";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="relative h-[94dvh]">
        <PatternWrapper>
          <div className="h-full">hello</div>
        </PatternWrapper>
      </div>
    </div>
  );
};

export default Home;
