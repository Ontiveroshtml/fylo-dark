import intro from "../assets/images/illustration-intro.png";
import curvy from "../assets/images/bg-curvy-desktop.svg";

export function Home() {
  return (
    <section
      id="inicio"
      className="relative flex justify-center pb-40 font-medium"
    >
      <img
        src={curvy}
        alt="curvy-bg"
        className="absolute bottom-0 left-0 w-full pointer-events-none h-100 -z-10"
      />

      <div className="flex flex-col justify-center items-center max-w-2xl gap-4 text-center px-4 z-20">
        <img src={intro} alt="illustration-intro" />

        <h1 className="text-white text-4xl font-bold">
          All your files in one secure location, accessible anywhere.
        </h1>

        <p className="text-white opacity-70 max-w-md ">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>

        <button className="bg-cyan-500 text-white py-2 px-16 rounded-full hover:bg-cyan-600 mt-2 cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}
