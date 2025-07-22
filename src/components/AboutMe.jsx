import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/700.css';
import ScrollReveal from './ScrollReveal';

const AboutMe = () => {
  const aboutText = `
Hi, I'm Yash — a developer from Nagpur who loves turning ideas into meaningful digital experiences.

With a background in Computer Engineering from Pune, I spend my time building side projects, exploring new tools, and solving real-world problems through code.

Whether it’s late-night debugging or perfecting a UI, I enjoy the craft. Clean code, smooth UX, and a hot cup of chai — that's my happy place.
`.trim();

  return (
    <section id='about' className="min-h-screen w-full bg-black antialiased text-white flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="relative min-h-screen bg-black text-slate-100 font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 bg-indigo-900/40 rounded-full blur-[150px] animate-pulse" />

        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
          {/* Profile Picture */}
          <div className="mb-6">
            <img
              src="src\assets\images\Profile-picture (1).jpg" // Replace with your preferred profile pic URL
              alt="Yash Thakare"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-lime-400 shadow-lg object-cover"
            />
          </div>

          <div className="max-w-5xl w-full text-justify">
            {/* Section Header */}
            <div className="text-center mb-8">
              <p className="inline-block bg-yellow-400/10 text-lime-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm uppercase font-inter">
                Behind the Code
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-playfair-display font-bold text-white leading-tight tracking-tight drop-shadow-md">
                About Me
              </h2>
            </div>

            {/* Animated Text Block */}
            <div className="text-base leading-relaxed text-slate-300 tracking-wide whitespace-pre-line font-inter">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
              >
                {aboutText}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
