export function Contact() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-35 flex flex-col text-White justify-center items-center bg-Navy-900 -z-1">
      <div className="flex flex-col gap-5 bg-Navy-850 max-w-3xl p-12 text-center shadow-2xl">
        <h2 className="font-bold text-3xl ">Get early access today</h2>

        <p className="opacity-90">
          it only take a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you
        </p>

        <div className="flex justify-center items-center gap-4 mt-4">
          <input type="text" className="rounded-full bg-White p-2 w-sm" />
          <button className="rounded-full bg-Cyan-500 p-2 ">
            Get started For Free
          </button>
        </div>
      </div>
    </div>
  );
}
