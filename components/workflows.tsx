import Image from "next/image";
import fileEditor from "@/public/images/File-editor.png";
import graphGenerator from "@/public/images/graph-generator.png";
import UVMRalTool from "@/public/images/uvm-ral-tool.png";
import UVMTestBench from "@/public/images/UVM-test-bench-architecture.png";
import WorkCollab from "@/public/images/work-collaboratively.png";
import Spotlight from "@/components/spotlight";

const workflows = [
  {
    id: 1,
    title: "UVM REG AI TOOL",
    description:
      "Automate and simplify register modeling in UVM with AI-powered assistance, reducing manual effort and boosting verification efficiency.",
    image: UVMRalTool,
  },
  {
    id: 2,
    title: "DIGITAL WAVEFORM PLOT",
    description:
      "Visualize simulation results with interactive digital waveform plots for easier debugging and signal analysis.",
    image: graphGenerator,
  },
  {
    id: 3,
    title: "COLLABORATIVE WORK",
    description:
      "Enable real-time collaboration with team members on projects, enhancing productivity and streamlining communication.",
    image: WorkCollab,
  },
  {
    id: 4,
    title: "ON THE GO EDITOR",
    description:
      "Edit and manage your verification environment anytime, anywhere with a lightweight, browser-based code editor.",
    image: fileEditor,
  },
  {
    id: 5,
    title: "AI TEST BENCH",
    description:
      "Enable real-time collaboration with team members on projects, enhancing productivity and streamlining communication.",
    image: UVMTestBench,
  },
];

export default function Workflows() {
  return (
    <section>
      <div id="features" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Explore our tool
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl md:text-5xl font-semibold text-transparent">
              Inside our VerifPlay
            </h2>
          </div>

          {/* Spotlight items */}
          <div className="space-y-20">
            {workflows.map((item, index) => (
              <Spotlight
  key={item.id}
  className={`group mx-auto flex flex-col items-center gap-10 md:gap-16 md:flex-row ${
    index % 2 === 0 ? "md:flex-row-reverse" : ""
  }`}
>

                {/* Image */}
<div
  className="group/card relative h-80 w-full md:w-1/2 overflow-hidden rounded-2xl bg-gray-800 p-px
    before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500
    after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500
    hover:after:opacity-20 group-hover:before:opacity-100"
>
  <div className="relative z-20 h-full w-full overflow-hidden rounded-[inherit] bg-gray-950 flex items-center justify-center">
    {/* Arrow on hover */}
    <div
      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
      aria-hidden="true"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
        <path
          fill="#F4F4F5"
          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
        />
      </svg>
    </div>
    {/* Image */}
    <Image
      className="max-w-full max-h-full object-contain"
      src={item.image}
      alt={item.title}
    />
  </div>
</div>






                {/* Content */}
                <div className="md:w-1/2">
                  <div className="p-6">
                    <div className="mb-6"> {/* increased spacing */}
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-3 py-1 text-sm font-semibold before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl md:text-3xl">
                          {item.title}
                        </span>
                      </span>
                    </div>
                    <p className="text-indigo-200/65 text-lg md:text-xl mt-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
