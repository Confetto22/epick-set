import Image from "next/image";
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
    <nav className="navbar bg-[#0C081F]  px-8 py-5 flex items-center justify-between">
      <div className="">
        <Image src="/logo-dark-mode.svg" alt="logo" width={100} height={100} />
      </div>
      <menu className="flex items-center gap-10">
        {navItems.map((navItem) => (
          <Link
            href={navItem.refLink}
            key={navItem.ref}
            className="text-gray-200 text-base font-medium"
          >
            {navItem.ref}
          </Link>
        ))}

        <Link
          href={"#"}
          className="bg-white px-5 py-2.5 rounded-md text-[#0c081F] font-medium"
        >
          Get Started
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
