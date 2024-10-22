import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 border-b-2 max-w-7xl mx-auto">
  <h1 className="text-3xl md:text-5xl font-bold">Knowledge Cafe</h1>
  <img className='w-16 md:w-20' src={profile} alt="Profile" />
</header>

  );
};

export default Header;
