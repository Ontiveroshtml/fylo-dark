import profileOne from "../assets/images/profile-1.jpg";
import profileTwo from "../assets/images/profile-2.jpg";
import profileThree from "../assets/images/profile-3.jpg";
import bgQuotes from "../assets/images/bg-quotes.png";

export function Testimonials() {
  return (
    <section className="bg-Navy-900 flex p-8 pb-70">
      <div className="flex flex-col sm:flex-row max-w-7xl gap-6 md:gap-8 mx-auto pt-20 z-2 relative ">
        <img
          src={bgQuotes}
          alt=""
          className="absolute -left-2 top-12 pointer-events-none -z-1"
        />
        <article className="bg-Navy-800 p-8">
          <p className="text-White">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex justify-start items-center gap-2 pt-8">
            <img src={profileOne} alt="" className="max-w-10 rounded-full" />
            <div className=" flex flex-col font-semibold">
              <span className="text-White">Satish Patel</span>
              <span className="text-White opacity-80 text-sm">
                Founder & CEO, Huddle
              </span>
            </div>
          </div>
        </article>

        <article className="bg-Navy-800 p-8">
          <p className="text-White">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex justify-start items-center gap-2 pt-8">
            <img src={profileTwo} alt="" className="max-w-10 rounded-full" />
            <div className=" flex flex-col font-semibold">
              <span className="text-White">Satish Patel</span>
              <span className="text-White opacity-80 text-sm">
                Founder & CEO, Huddle
              </span>
            </div>
          </div>
        </article>

        <article className="bg-Navy-800 p-8">
          <p className="text-White">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex justify-start items-center gap-2 pt-8">
            <img src={profileThree} alt="" className="max-w-10 rounded-full" />
            <div className=" flex flex-col font-semibold">
              <span className="text-White">Satish Patel</span>
              <span className="text-White opacity-80 text-sm">
                Founder & CEO, Huddle
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
