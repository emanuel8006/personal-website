import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
   return (
      <section id="about" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               {/* left side: traits/who I am (e.g., student interested in ___)
               */}
               <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Honors Northeastern Computer Science and Math Student</h3>

                  <p className="text-muted-foreground">
                     {/* YAP briefly (1-2 sentence) about experience(s), 
                       * specialty, technologies/frameworks you know
                     */}
                     YAP
                  </p>

                  <p className="text-muted-foreground">
                     {/* YAP briefly (1-2 sentences) about passion/drive/learning */}
                     YAP
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                     <a href="#contact" className="cosmic-button ">
                        Get In Touch
                     </a>
                     
                     {/* REPLACE UNDERSCORE WITH RESUME. Link href to resume file. 
                       * Resume will be a file in the project and link to that.*/
                     }
                     <a 
                        href="__" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                     >
                        Download Resume
                     </a> 
                  </div>
               </div>

               {/* right side: skills */}
               <div className="grid grid-cols-1 gap-6">
                  <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                           <h4 className="font-semibold text-lg">Web Development</h4>
                           <p className="text-muted-foreground">
                              Yap 
                              {/* Talk about making responsive web(sites/apps) with modern frameworks */}
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <User className="h-6 w-6 text-primary"/>
                           {/* How our UI interacts with users, creativity, etc. */}
                        </div>
                        <div className="text-left">
                           <h4 className="font-semibold text-lg">UI/UX Design</h4>
                           <p className="text-muted-foreground">
                              Yap 
                              {/* Something related to user (could change it too).
                                * Yap about what design for flawless user expeirnce/something related to topic
                                * Brief 1-2 sentences */
                              }
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Briefcase className="h-6 w-6 text-primary"/>
                           {/* Work experiences */}
                        </div>
                        <div className="text-left">
                           <h4 className="font-semibold text-lg">Backend Engineer</h4>
                           <p className="text-muted-foreground">
                              Yap 
                              {/* Talk about a role during a project + what you did (brief 1-2 sentences)*/}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
