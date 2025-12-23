import VideoThumb from "@/public/images/VERIF-PLAYGROUND.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-10 md:py-20">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-10 font-nacelle text-4xl md:text-5xl font-semibold text-transparent"
              data-aos="fade-up"
            >
              Welcome to Verif Playground
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-base md:text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                VerifPlay is an innovative platform dedicated to accelerating functional verification across the ASIC and SoC design lifecycle.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Login Now
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://login.verifplay.com/request-demo"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clean image with fade-up animation */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay={500}>
            <img
              src={VideoThumb.src}
              alt="Verif Playground"
              width={909}
              height={585}
              className="rounded-none shadow-none border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
