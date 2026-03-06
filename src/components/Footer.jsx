import { ArrowUp } from "lucide-react";

/**
 * Footer — Site footer with copyright and back-to-top link.
 *
 * Renders dynamic year via new Date().getFullYear() and a button that
 * scrolls to #hero (smooth scroll is enabled in index.css on html).
 *
 * @returns {JSX.Element} Footer element with id not required (no nav target).
 */
export const Footer = () => {
   return (
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
         <p className="text-sm text-muted-foreground"> 
            &copy; {new Date().getFullYear()} emanuelgg.com. All rights reserved.
         </p>

         <a 
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
         > 
            <ArrowUp size={25}/> 
         </a>
      </footer>
   )
}