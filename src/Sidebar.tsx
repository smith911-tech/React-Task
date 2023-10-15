import {
  Signflow,
  Events,
  Pipeline,
  Source,
  Destination,
  Transformations,
  Account,
  Settings,
  Help,
  Documentaion
} from "./Svg";
export default function Sidebar() {
  return (
    <section className=" w-[248px] h-[100vh] fixed">
      <h1 className=" text-[#32D583] text-2xl font-semibold font-Inter mt-2">
        Sigflow
      </h1>
      <article className=" mt-7 relative h-[100vh] select-none">
        <Signflow />
        <ul className="flex flex-col mt-10 gap-4 mr-10">
          <li className="flex gap-2 text-[#828282] pl-1">
            <Events /> <p className="text-sm">Events</p>
          </li>
          <li className="flex gap-2 text-[#828282] pl-1">
            <Pipeline /> <p className="text-sm">Pipeline</p>
          </li>
          <li className="flex gap-2 text-[#828282] pl-1">
            <Source /> <p className="text-sm">Source</p>
          </li>
          <li className="flex gap-2 text-[#828282] pl-1">
            <Destination /> <p className="text-sm">Destination</p>
          </li>
          <li className="flex gap-2 text-[#32D583] bg-[#ECFDF3] py-2 pl-1 rounded-lg ">
            <Transformations />
            <p className="text-sm">Transformations</p>
          </li>
        </ul>
        <hr className=" my-4" />
        <ul className="flex flex-col mt-4 gap-4">
          <li className="flex gap-2 text-[#828282] pl-1">
            <Account /> <p className="text-sm">Account</p>
          </li>
          <li className="flex gap-2 text-[#828282] pl-1">
            <Settings /> <p className=" text-sm">Settings </p>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 absolute bottom-[18%]">
          <li className="flex gap-2 text-[#32D583] ">
            <Help />
            <p className="text-sm">Help</p>
          </li>
          <li className="flex gap-2 text-[#32D583] ">
            <Documentaion />
            <p className="text-sm">Documentation</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
