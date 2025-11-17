import accessIcon from "../assets/images/icon-access-anywhere.svg";
import securityIcon from "../assets/images/icon-security.svg";
import fileIcon from "../assets/images/icon-any-file.svg";
import collabIcon from "../assets/images/icon-collaboration.svg";

export function Features() {
  return (
    <>
      <section
        id="features"
        className="bg-Navy-900 flex justify-center"
      >
        <div className="grid sm:grid-cols-2 justify-between items-center p-2 max-w-4xl gap-20 text-center">
          <article className="flex flex-col justify-center items-center">
            <img src={accessIcon} alt="icon-access-anywhere" />
            <h3 className="text-White font-medium">
              Access your files. anywhere
            </h3>
            <p className="text-white opacity-80">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere
            </p>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src={securityIcon} alt="icon-access-anywhere" />
            <h3 className="text-White font-medium">Security you can trust</h3>
            <p className="text-white opacity-80">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src={collabIcon} alt="icon-access-anywhere" />
            <h3 className="text-White font-medium">Real-time collaboration</h3>
            <p className="text-white opacity-80">
              Securely share files and folders with friends. family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src={fileIcon} alt="icon-access-anywhere" />
            <h3 className="text-White font-medium">Store any type of file</h3>
            <p className="text-white opacity-80">
              Whether you're sharing holldays photos or work documents. Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
