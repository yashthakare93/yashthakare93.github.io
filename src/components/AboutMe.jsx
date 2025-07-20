import '@fontsource/inter';
import '@fontsource/playfair-display';
import DecryptedText from './Decryptedtext';

const AboutMe = () => {
  const aboutText = `
Hey, I’m Yash Thakare — a developer from Nagpur with a passion for building things that are both meaningful and beautifully simple.

I’m currently pursuing Computer Engineering in Pune. I build side projects not just to learn — but to create something others can use.

I thrive in the process — the debugging at midnight, the UI tuning, and the joy of getting things just right.

Outside code, you’ll find me journaling, exploring new tools, or sipping chai while thinking of the next cool idea.

I care about clean code, thoughtful UX, and building things that feel just right.
  `.trim();

  return (
    <section className="min-h-screen w-full bg-slate-900 text-white flex items-center justify-center px-6 md:px-12 py-24 font-sans">
      <div className="max-w-4xl text-center">
        <h2 className="text-6xl md:text-7xl font-heading mb-14 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 tracking-tight">
          About Me
        </h2>

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
