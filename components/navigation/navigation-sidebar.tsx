import { mobileLinks } from "@/constants";

const NavigationSidebar = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="items-start text-xl">
        {mobileLinks.map((i) => (
          <ul key={i.label} className="pb-4">
            {i.label}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default NavigationSidebar;
