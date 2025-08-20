import openartLogo from "@/assets/openart.png";
import freepikLogo from "@/assets/freepik.png";
import runwayLogo from "@/assets/runway.png";
import photoshop from "@/assets/Photoshop.png";
import premiere from "@/assets/premiere.png"
import after from "@/assets/Aftereffects.png"

const SoftwareFocus = () => {
  const software = [
    {
      name: "OpenArt",
      logo: openartLogo,
    },
    {
      name: "Freepik",
      logo: freepikLogo,
    },
    {
      name: "Runway",
      logo: runwayLogo,
    },
    {
      name: "Premiere Pro",
      logo: premiere,
    },
    {
      name: "After Effects",
      logo: after,
    },
    {
      name: "Photoshop",
      logo: photoshop,
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Software{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In Focus
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 grid-cols-3  place-items-center">
            {software.map((tool, index) => (
              <div
                key={index}
                className=" rounded-xl  flex items-center justify-center hover:border-primary/50 transition-all duration-300 group hover:shadow-card"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-50 h-50 lg:w-40 lg:h-40 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareFocus;
