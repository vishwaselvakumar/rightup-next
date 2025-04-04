import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logos/partner/logo.png"

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const touchRef = useRef();

  const Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/timeline" },
    {
      name: "Services",
      dropdown: true,
      subLinks: [
        { name: "Software Development ", link: "/services/software" },
        { name: "Web & App Development ", link: "/services/app" },
        { name: "Digital Marketing", link: "/services/digital" },
        { name: "Brand Shoots", link: "/services/camara" },
        { name: "AI / ML ", link: "/services/ai" },
        { name: "Tranning", link: "/colleges" },
  
      ],
    },
    { name: "Tech", link: "/tech" },
    { name: "Prolens", link: "/camara" },
    { name: "Studies", link: "/colleges" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleRouteChange = () => {
      setOpen(false);
      setWorkDropdown(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav ref={touchRef}className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-400 to-blue-900 shadow-md transition-all duration-300" >
  
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        <div className="text-white text-xl font-bold cursor-pointer">
          <Link href="/">
           <Image src={logo} alt="added" width={200} height={200}/>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 ">
          {Links.map((link) => (
            <li key={link.name} className="relative text-white text-lg">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setWorkDropdown(!workDropdown)}
                    className="hover:text-yellow-300 focus:outline-none"
                  >
                    {link.name}
                  </button>
                  {workDropdown && (
                    <ul className="absolute mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.link} className="block px-4 py-2 text-center hover:bg-blue-100">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={link.link}>
                  <span className={`transition duration-300 cursor-pointer ${router.pathname === link.link ? "text-yellow-400" : "hover:text-yellow-300"}`}>{link.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col space-y-1.5 w-8 h-8 justify-center items-center"
          >
            <div className={`w-6 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-1 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <ul
        className={`md:hidden flex flex-col items-center absolute left-0 w-full bg-blue-700 text-white transition-transform duration-500 ${
          open ? "top-16 opacity-100" : "top-[-300px] opacity-0 pointer-events-none"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="text-center py-4 border-b border-blue-500 w-full">
            {link.dropdown ? (
              <>
                <button
                  onClick={() => setWorkDropdown(!workDropdown)}
                  className="block w-full text-lg focus:outline-none"
                >
                  {link.name}
                </button>
                {workDropdown && (
                  <ul className="bg-blue-800 w-full">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.link} className="block py-2 px-4 hover:bg-blue-600">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={link.link} onClick={() => setOpen(false)}>
                <span className="cursor-pointer block w-full text-lg">{link.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;