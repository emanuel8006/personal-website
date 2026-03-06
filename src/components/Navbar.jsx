import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

/** Navigation links: display name and href (anchor targets on the same page). */
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

/**
 * Navbar — Fixed top navigation with desktop links and mobile hamburger menu.
 *
 * Two pieces of state: isScrolled (for adding background/blur when user
 * scrolls) and isMenuOpen (for showing/hiding the full-screen mobile menu).
 * useEffect subscribes to "scroll" and cleans up on unmount. The mobile menu
 * is a fixed overlay that becomes visible when isMenuOpen is true; clicking
 * a link closes it (setIsMenuOpen(false)). cn() is used to combine class
 * names conditionally (e.g. scrolled vs not, menu open vs closed). Nav link
 * hrefs match section ids (#hero, #about, etc.) for in-page navigation.
 *
 * @returns {JSX.Element} Fixed <nav> with logo, desktop links, and mobile menu.
 */
export const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false); // for desktop
   const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile devices

   /** Update isScrolled on scroll; cleanup removes listener when component unmounts. */
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.screenY > 10)
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav className={cn(
         "fixed w-full z-40 transition-all duration-300",
         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}>
         <div className="container flex items-center justify-between">
            <a 
               className="text-xl font-bold text-primary flex items-center"
               href="#hero"
            >
               <span className='relative z-10'>
                  <span className='text-glow text-foreground'> Emanuel Galindo Garcia </span>{" "}
                  Portfolio
               </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
               {navItems.map((item, key) => (
                  <a 
                     key={key} 
                     href={item.href}
                     className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                     {item.name}
                  </a>
               ))}
            </div>

            {/* mobile nav */}
            
            <button 
               onClick={() => setIsMenuOpen((prev) => !prev)} 
               className="md:hidden p-2 text-foreground z-50"
               aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            > 
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
            </button>

            <div className={cn(
               "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
               "transition-all duration-300 md:hidden",
               isMenuOpen 
                  ? "opacity-100 pointer-events-auto" 
                  : "opacity-0 pointer-events-none"
               )}
            >
               <div className="flex flex-col space-y-8 text-xl ">
                  {navItems.map((item, key) => (
                     <a 
                        key={key} 
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        {item.name}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </nav>
    );
};