import NavBar from "@/components/NavBar";
import { Search } from "@/components/ui/search";
import { UserNav } from "@/components/userNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12">
      <div className="border-b">
        <div className="flex justify-between w-screen h-16 items-center px-4">
          <NavBar />
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex">
              <Search />
            </div>
            <UserNav />
          </div>
        </div>
      </div>
    </main>
  );
}
