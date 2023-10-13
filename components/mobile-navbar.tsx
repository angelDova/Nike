import { Equal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationSidebar from "./navigation/navigation-sidebar";

export const MobileNavbar = () => {
  return (
    // <Button variant="ghost" size="icon">
    //   <Equal className="" />
    // </Button>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden max-lg:block">
          <Equal />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <div className="w-full">
          <NavigationSidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};
