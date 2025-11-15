import productiveIllustration from "../assets/images/illustration-stay-productive.png";
import iconArrow from "../assets/images/icon-arrow.svg";

export function Team() {
  return (
    <section id="team" className="bg-Navy-900 flex justify-center ">
      <div className="flex justify-center items-center mt-16 gap-8">
        <img src={productiveIllustration} alt="icon-arrow" className="pr-10" />

        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-White text-4xl max-w-sm">
            Stay productive, wherever you are
          </h2>
          <p className="text-white opacity-90">
            Never let location be an issue when accessing your files. Fyle has
            you covered for all of your file storage needs.
          </p>
          <p className="text-white opacity-90">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#" className="flex text-Cyan-500 underline gap-2">
            See how Fylo works <img src={iconArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
