import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Tianhao Ye</h1>
      <div>
        <Link href="/" className="px-4">Home</Link>
        <Link href="/projects" className="px-4">Projects</Link>
        <Link href="/about" className="px-4">About</Link>
        <Link href="/contact" className="px-4">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
