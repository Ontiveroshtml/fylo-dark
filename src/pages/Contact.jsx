export function Contact() {
  return (
    <div
      className="
      absolute left-1/2 -translate-x-1/2 
      -top-40 sm:-top-28 md:-top-32 lg:-top-36
      w-full px-4
      flex justify-center
      text-White z-10
    "
    >
      <div
        className="
        flex flex-col gap-5 bg-Navy-850
        w-full max-w-xl sm:max-w-lg md:max-w-2xl
        p-8 md:p-10
        text-center shadow-2xl rounded-sm
      "
      >
        <h2 className="font-bold text-2xl sm:text-3xl">
          Get early access today
        </h2>

        <p className="opacity-90 text-sm sm:text-base">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <div
          className="
          flex flex-col sm:flex-row 
          justify-center items-center 
          gap-4 w-full mt-4
        "
        >
          <input
            type="text"
            className="
              rounded-full bg-White text-Navy-800
              p-3 w-full sm:flex-1
            "
            placeholder="email@example.com"
          />

          <button
            className="
            rounded-full bg-Cyan-500
            p-3 text-sm w-full sm:w-auto
          "
          >
            Get started For Free
          </button>
        </div>
      </div>
    </div>
  );
}
