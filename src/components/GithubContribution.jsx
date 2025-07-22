import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubContributions = () => {
  const [year, setYear] = useState(2025);
  const years = [2025, 2024, 2023];

  // Teal shade theme
  const tealTheme = [
    '#164e63',  // Very dark (no commits)
    '#0d9488',  // Low
    '#14b8a6',  // Medium
    '#2dd4bf',  // High
    '#99f6e4'   // Very high
  ];


  return (
    <section id='contribution' className="min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center justify-center">
      <div className="relative min-h-screen bg-black text-slate-100 font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 bg-indigo-900/40 rounded-full blur-[150px] animate-pulse" />
        <div className="relative z-10 w-full max-w-7xl">

          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-sm bg-cyan-800/40 text-lime-300 px-4 py-1 rounded-full mb-3 font-medium w-fit mx-auto">
              A Timeline of My Dedication
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">My GitHub Contributions</h2>
          </div>

          {/* Contributions Box */}
          <div className="relative w-full max-w-7xl bg-[#0f172a] rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl">
            {/* Calendar & Buttons Layout */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* Calendar */}
              <div className="w-full overflow-auto">
                <GitHubCalendar
                  username="yashthakare93"
                  year={year}
                  blockSize={15}
                  blockMargin={5}
                  colorScheme="dark"
                  theme={{ dark: tealTheme }}
                  hideColorLegend={true}
                  showTotalCount={true}
                />
              </div>

              {/* Year Selector */}
              <div className="flex flex-row lg:flex-col justify-center items-center gap-3">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md ${y === year
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                      }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend aligned to bottom-right */}
            <div className="flex justify-end mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span>Less</span>
                <div className="flex gap-1">
                  {tealTheme.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-sm"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-6">
            <a
              href="https://github.com/yashthakare93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-lg"
            >
              View my full profile on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
