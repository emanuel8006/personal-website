import { useEffect, useState } from "react";

/**
 * StarBackground — Decorative background of twinkling stars and meteor streaks.
 *
 * Rendered as a fixed, full-screen layer (pointer-events-none, z-0) so it
 * doesn't block clicks. Stars and meteors are generated once on mount and
 * on window resize so density scales with viewport. Each star has random
 * size, position (%), opacity, and animation duration; meteors have position,
 * delay, and duration. The CSS classes "star", "meteor", "animate-pulse-subtle",
 * and "animate-meteor" come from index.css. Empty dependency array [] in
 * useEffect means this runs only on mount and cleanup on unmount.
 *
 * @returns {JSX.Element} A fixed div containing absolutely positioned star and meteor divs.
 */
export const StarBackground = () => {
    const [stars, setStars] = useState([]); // will have: id, size, x, y, opacity, animation duration
    const [meteors, setMeteors] = useState([]); // will have: id, size, x, y, delay, animation duration

    /** Generate stars and meteors on mount; regenerate stars on resize; cleanup listener on unmount. */
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
          generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); //empty dependency [] safety

    /** Create an array of star configs (count scales with window area) and set state. */
    const generateStars = () => {
        /* The number of stars and size will vary depending on the window size */
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random()* 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, //for pulsation
            });
        }

        setStars(newStars);
    };

    /** Create a fixed number of meteor configs with random position and timing. */
    const generateMeteors = () => {
        /* The number of stars and size will vary depending on the window size */
        const numberOfMeteors = 5;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random()* 15,
                animationDuration: Math.random() * 3 + 3, //for pulsation
            });
        }

        setMeteors(newMeteors);
    };
    

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
            {stars.map((star) => (
                <div 
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style = {{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div 
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style = {{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2+ "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};