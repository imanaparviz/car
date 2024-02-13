// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <button className="text-white font-bold text-xl">
            {/* Hier könnten Sie Ihr Logo als Bild oder SVG einbinden */}
            Matter
          </button>
        </Link>
        <div className="flex items-center">
          {/* Navigationslinks */}
          <Link href="/about">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</button>
          </Link>
          {/* Weitere Links hinzufügen */}
        </div>
        {/* Hier können Sie weitere Elemente wie Log-in-Button hinzufügen */}
      </div>
    </nav>
  );
};

export default Navbar;
