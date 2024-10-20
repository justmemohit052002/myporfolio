import anime from "animejs";

const WaterDropGrid = () => {
    return (
        <div className="relative grid place-content-center w-full h-96 px-10 py-16">
            <DotGrid />
        </div>
    );
};

const GRID_WIDTH = 50; // Number of columns in the grid
const GRID_HEIGHT = 22; // Number of rows in the grid

const DotGrid = () => {
    const handleDotHover = (e) => {
        anime({
            targets: ".dot-point",
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            opacity: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index,
            }),
        });
    };

    const dots = []; // Array to hold the dot elements
    let index = 0; // Index for the dots

    // Create the grid of dots
    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-2 transition-colors" // Add rounded corners
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-3 w-3 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white" // Dot styling
                        data-index={index}
                        onMouseEnter={handleDotHover} // Trigger animation on hover
                    />
                </div>
            );
            index++; // Increment index
        }
    }

    return (
        <div
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }} // Define grid template columns
            className="grid w-fit" // Ensure grid takes width fit to its content
        >
            {dots}
        </div>
    );
};

export default WaterDropGrid; // Export the WaterDropGrid component
