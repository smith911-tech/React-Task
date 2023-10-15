import { Headericon } from "./Svg";
import Sidebar from "./Sidebar";

export default function Dashboard(){
    return (
      <main className="pt-7 pl-7 flex ">
        <Sidebar />
        <section className="w-full ml-[248px]">
          <header className="border-b border-[#E6E7EC] pb-1 flex justify-end mr-5">
            <Headericon />
          </header>
          <article className=" mt-7 px-3">
            <div className="flex justify-between gap-4 ">
              <h2 className=" font-semibold text-xl">Events</h2>
            </div>
          </article>
        </section>
      </main>
    );
}