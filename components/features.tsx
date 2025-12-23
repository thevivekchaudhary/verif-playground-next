import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

const features = [
  {
    id: 1,
    title: "Define, Convert, and Integrate – All in One Place",
    description:
      "Easily define your SoC register architecture, convert Verilog and C headers into a unified format, and auto-generate UVM-compatible outputs.",
    iconPath: "M4 4h16v2H4V4Zm0 7h16v2H4v-2Zm0 7h16v2H4v-2Z",
  },
  {
    id: 2,
    title: "VerifPlay Playground: Smarter Test Planning",
    description:
      "Define your verification intent once, and let VerifPlay auto-generate optimized, coverage-driven testcases with traceability.",
    iconPath: "M3 5h18v2H3V5Zm0 6h12v2H3v-2Zm0 6h6v2H3v-2Z",
    iconCircle: { cx: 19, cy: 17, r: 2 },
  },
  {
    id: 3,
    title: "Smart Design Document by VerifPlay",
    description:
      "Transform specs into interactive waveforms, flowcharts, block diagrams, and circuit diagrams — all in one intelligent workspace.",
    iconPath: "M4 3h16v2H4V3Zm0 4h16v2H4V7Zm0 4h10v2H4v-2Zm0 4h6v2H4v-2Z",
  },
  {
    id: 4,
    title: "Smart Design Document with AI Assist",
    description:
      "Effortlessly add waveforms, flowcharts, block diagrams, and circuit diagrams with AI-driven precision — right inside your design document.",
    iconPath: "M12 2 2 7l10 5 10-5-10-5Zm0 7.5L4 7v10l8 2.5V9.5Zm2 0v10L20 17V7l-6 2.5Z",
  },
  {
    id: 5,
    title: "Python-Based AI API by VerifPlay",
    description:
      "Integrate VerifPlay’s AI API into any workflow to generate automated testcases, empower multi-level debugging, and cut verification milestones by up to 40%.",
    iconPath:
      "M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 14.93V20h-2v-3.07A8.005 8.005 0 0 1 4.07 13H1v-2h3.07A8.005 8.005 0 0 1 11 4.07V1h2v3.07A8.005 8.005 0 0 1 19.93 11H23v2h-3.07A8.005 8.005 0 0 1 13 16.93Z",
  },
  {
    id: 6,
    title: "ASIC Verification Regression Data Management",
    description:
      "Track millions of test results with intelligent data management built for ASIC verification — all in one powerful platform.",
    iconPath: "M3 5h18v2H3V5Zm0 6h12v2H3v-2Zm0 6h6v2H3v-2Zm14-6h4v8h-4v-8Z",
  },
];

export default function Features() {
  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-6 text-center md:pb-12">
            <div className="pb-3 text-center">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg md:text-xl">
                Explore our features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-4xl md:text-5xl font-semibold text-transparent">
              Everything you need to work smarter, together
            </h2>
          </div>

          {/* Features image */}
          <div className="flex justify-center pb-6 md:pb-12">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>

          {/* Features list */}
          <div className="grid mx-auto max-w-sm gap-20 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-24 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.id} className="flex flex-col mb-12">
                <svg
                  className="mb-6 h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d={feature.iconPath} />
                  {feature.iconCircle && (
                    <circle
                      cx={feature.iconCircle.cx}
                      cy={feature.iconCircle.cy}
                      r={feature.iconCircle.r}
                    />
                  )}
                </svg>
                <h3 className="mt-4 mb-5 font-nacelle text-xl md:text-2xl font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/65 text-base md:text-lg mt-2">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
