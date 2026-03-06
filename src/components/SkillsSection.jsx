import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * List of skills shown in the skills grid. Each object: name, level (0–100),
 * category ("frontend" | "backend" | "tools"). category is used for filtering
 * when the user clicks the category buttons. Note: one object has "catergory"
 * typo — consider fixing for consistent filtering.
 */
const skills = [
   /* Each skill should be its own object, formatted as the example below */
   //Front End
   { name: "HTML/CSS", level: 85, catergory: "frontend"},
   { name: "JavaScript", level: 80, category: "frontend" },
   { name: "React", level: 75, category: "frontend" },
   { name: "Tailwind CSS", level: 70, category: "frontend" },

   //Backend (e.g., Supabase, PostgreSQL, Python-Flask-FastAPI)
   { name: "Python", level: 80, category: "backend" },
   { name: "PostgreSQL", level: 80, category: "backend" },
   { name: "Supabase", level: 80, category: "backend" },

   //Tools (e.g., Git/Github, AWS-EC2-lambda-amplify, Docker, Cursor, VSCode, etc)
   { name: "Git/GitHub", level: 80, category: "tools" },
   { name: "Cursor", level: 70, category: "tools" },
];

/** Category filter options; "all" shows every skill. */
const categories = ["all", "frontend", "backend", "tools"];

/**
 * SkillsSection — Filterable skills grid with progress bars.
 *
 * Uses React state: activeCategory drives which skills are shown. filteredSkills
 * is derived from skills (all when "all", otherwise by skill.category). The
 * progress bar width is set with style={{ width: skill.level + "%" }}. cn()
 * is used to conditionally apply "active" button styles.
 *
 * @returns {JSX.Element} Section with id="skills" for navigation.
 */
export const SkillsSection = () => {
   const [activeCategory, setActiveCategory] = useState("all");

   const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
   );

   return (
      <section 
         id="skills" 
         className="py-24 px-4 relative bg-secondary/30"
      >
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
               {categories.map((category, key) => (
                  <button 
                     key={key}
                     onClick={() => setActiveCategory(category)}
                     className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory == category 
                           ? "bg-primary text-primary-foreground" 
                           : "bg-secondary/70 text-foreground hover:bd-secondary"
                     )}
                  >
                     {category}
                  </button>
               ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredSkills.map((skill, key) => (
                  <div 
                     key={key}
                     className="bg-card p-6 rounded-lg shadow-xs card-hover"
                  >
                     <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg"> {skill.name} </h3>
                     </div>

                     <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div 
                           className="bg-primary h-2 rounded-full origin-left animate-[gro_1.5s_ease-out]"
                           style={{width: skill.level + "%"}}
                        />
                     </div>

                     <div className="text-right mt-1">
                        <span className="text-small text-muted-foreground">{skill.level}%</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}