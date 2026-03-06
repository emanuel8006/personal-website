import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle — Button to switch between light and dark theme.
 *
 * Theme is persisted in localStorage under the key "theme" and applied by
 * adding/removing the "dark" class on document.documentElement (<html>).
 * index.css defines .dark { ... } overrides for colors. useEffect runs once
 * on mount (empty dependency array []) to read localStorage and set initial
 * state and class. toggleTheme updates both DOM and localStorage so the
 * choice survives page reloads.
 *
 * @returns {JSX.Element} A button showing Sun (in dark mode) or Moon (in light).
 */
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    /** On first load, sync state and <html> class with saved theme. */
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme == "dark") {
         setIsDarkMode(true);
         document.documentElement.classList.add("dark");
      } else {
         localStorage.setItem("theme", "light");
         setIsDarkMode(false);
      }
   }, []);

    /** Toggle dark/light and persist to localStorage. */
    const toggleTheme = () => {
      if (isDarkMode) {
         document.documentElement.classList.remove("dark")
         localStorage.setItem("theme", "light");
         setIsDarkMode(false);
      } else {
         document.documentElement.classList.add("dark")
         localStorage.setItem("theme", "dark");
         setIsDarkMode(true);
      }
    };

    return (
         <button 
            onClick={toggleTheme}
            className={cn(
               "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
               "focus:outlin-hidden"
            )}
         >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
         </button>
    );
};
