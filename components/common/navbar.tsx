import Link from "next/link";

const navItems = [
  {
    ref: "About",
    refLink: "#",
  },
  {
    ref: "Features",
    refLink: "#",
  },
  {
    ref: "Pricing",
    refLink: "#",
  },
  {
    ref: "Careers",
    refLink: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar bg-[#0C081F]  px-8 py-5 flex items-center justify-between border-b border-white">
      <div className="logo text-white">logo</div>
      <menu className="flex items-center gap-6">
        {navItems.map((navItem) => (
          <Link
            href={navItem.refLink}
            key={navItem.ref}
            className="text-gray-200 "
          >
            {navItem.ref}
          </Link>
        ))}
        <Link
          href={"#"}
          className="bg-white px-3 py-2 rounded-md text-[#0c081F]"
        >
          Get Started
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
