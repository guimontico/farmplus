import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <NavBar />

          <div className="ml-auto flex items-center space-x-4">
            {/* <Search />
              <UserNav /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
