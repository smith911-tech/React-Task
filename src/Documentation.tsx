import { Headericon } from "./Svg";
import Sidebar from "./Sidebar";

export default function Documentation() {
  return (
    <main className="pt-7 pl-7 flex ">
      <Sidebar />
      <section className="w-full ml-[248px]">
        <header className="border-b border-[#E6E7EC] pb-1 flex justify-end mr-5">
          <Headericon />
        </header>
      </section>
    </main>
  );
}
