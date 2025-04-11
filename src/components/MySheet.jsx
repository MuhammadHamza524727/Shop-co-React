import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function MySheet() {
  return (
    <>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="px-4  bg-transparent text-black rounded-md">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <h1 className='text-[14px] font-extrabold integral-font  '>SHOP.CO</h1>

              </SheetTitle>
              <SheetDescription>
                {/* Yeh ek Shadcn Sheet hai jo TailwindCSS ke saath styled hai. */}
                <div className="mt-4">
              <ul className=' justify-around items-start gap-2 p-2 flex flex-col'>
                <li>Profile</li>
                <li>My Cart</li>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>

              </ul>
              {/* <button className="mt-2 px-2 py-1 bg-green-500 text-white rounded">
                Click Me
              </button> */}
              
            </div>
              </SheetDescription>
            </SheetHeader>
            
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default MySheet;