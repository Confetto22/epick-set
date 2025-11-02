import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const footerObj: Record<string, { label: string; href: string }[]> = {
    EXPLORE: [
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Demo", href: "#" },
      { label: "Careers", href: "#" },
    ],
    RESOURCES: [
      { label: "Blog post name goes here", href: "#" },
      // { label: "Blog post name goes here", href: "#" },
      // { label: "Blog post name goes here", href: "#" },
      { label: "See all resources", href: "#" },
    ],
    CONNECT: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  const appDownloads = [
    {
      platform: "App Store",
      status: "Coming Soon",
      icon: <FaApple size={25} />,
    },
    {
      platform: "Google Play",
      status: "Coming Soon",
      icon: <IoLogoGooglePlaystore size={25} />,
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram size={23} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <FaLinkedin size={23} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaXTwitter size={23} />,
    },
  ];

  return (
    <footer className="bg-background-secondary px-6 py-16 flex justify-center border-t border-border">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Render footer sections dynamically */}
          {Object.keys(footerObj).map((section) => (
            <div key={section} className="flex flex-col gap-3">
              <h3 className="text-foreground font-semibold text-lg mb-6">
                {section}
              </h3>
              <ul className="gap-2 flex flex-col">
                {footerObj[section].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* DOWNLOAD THE APP */}
          <div className=" flex-col gap-3 hidden lg:flex">
            <h3 className="text-foreground font-semibold text-lg mb-6">
              DOWNLOAD THE APP
            </h3>
            <p className="text-muted-foreground mb-6">Coming Soon</p>

            <div className="space-y-3 flex flex-col gap-4">
              {appDownloads.map((app) => (
                <div
                  key={app.platform}
                  className="bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-3"
                >
                  <span className="text-foreground">{app.icon}</span>
                  <div>
                    <div className="text-muted-foreground text-xs">
                      {app.status}
                    </div>
                    <div className="text-foreground font-semibold">
                      {app.platform}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground">Follow Us On:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-muted-foreground">
            Copyright © 2025 EpickSet Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
