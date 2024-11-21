import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import UpgradeButton from "./upgradeButton";
import ModeToggle from "./modeToggle";

function Header() {
  return (
    <div className="flex sticky z-50 top-0 bg-black justify-between shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        pdf <span className="text-indigo-600">Bot</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="hidden md:block border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <div className="hidden md:block"> 
            <UpgradeButton /> 
          </div> 
     
          <UserButton /> 
         
          <ModeToggle />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;