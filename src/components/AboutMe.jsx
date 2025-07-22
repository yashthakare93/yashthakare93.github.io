import '@fontsource/inter';
import '@fontsource/playfair-display';
import DecryptedText from './Decryptedtext';

const AboutMe = () => {
const aboutText = `
Hi, I’m Yash Thakare — a passionate developer from Nagpur who enjoys turning ideas into impactful digital experiences.

My journey in tech has been shaped by curiosity, creativity, and a love for problem-solving. I’ve completed my degree in Computer Engineering from Pune, and I love building side projects — not just to learn, but to create tools that others find genuinely useful.

I thrive in the process — the midnight debugging sessions, pixel-perfect UI tweaks, and the satisfaction of getting things just right.

Beyond code, you'll often find me journaling, exploring new tools, or sipping chai while sketching out my next idea.

I care deeply about clean code, thoughtful user experiences, and building products that feel intuitive and delightful to use.
`.trim();



  return (
    <section className="min-h-screen w-full bg-slate-900 text-white flex items-center justify-center px-6 md:px-12 py-24 font-sans">
      <div className="max-w-4xl text-center">
        <div className="text-center mb-6">
          <p className="inline-block bg-emerald-800/30 text-emerald-300 px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
            Get to Know Me Better
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            About Me
          </h2>
        </div>


        <div className="text-xl leading-9 text-slate-200 tracking-wide max-w-2xl mx-auto whitespace-pre-line">
          <DecryptedText
            text={aboutText}
            animateOn="view"
            revealDirection="left"
            speed={30}
            maxIterations={25}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
