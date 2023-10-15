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
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <section className=" w-[248px] h-[100vh] fixed">
      <h1 className=" text-[#32D583] text-2xl font-semibold font-Inter mt-2">
        Sigflow
      </h1>
      <article className=" mt-7 relative h-[100vh] select-none text-[#828282]">
        <Signflow />
        <section className="flex flex-col mt-10 gap-4 mr-10">
          <NavLink
            to="/Dashboard/events"
            className="flex gap-2 cursor-pointer ActiveLink py-2 pl-1 rounded-lg "
          >
            <Events /> <p className="text-sm">Events</p>
          </NavLink>
          <NavLink
            to="/Dashboard/pipeline"
            className="flex gap-2 cursor-pointer ActiveLink py-2 pl-1 rounded-lg "
          >
            <Pipeline /> <p className="text-sm">Pipeline</p>
          </NavLink>
          <NavLink
            to="/Dashboard/source"
            className="flex gap-2 cursor-pointer ActiveLink py-2 pl-1 rounded-lg "
          >
            <Source /> <p className="text-sm">Source</p>
          </NavLink>
          <NavLink
            to="/Dashboard/destination"
            className="flex gap-2 cursor-pointer ActiveLink py-2 pl-1 rounded-lg "
          >
            <Destination /> <p className="text-sm">Destination</p>
          </NavLink>
          <NavLink
            to="/Dashboard/transformation"
            className="flex gap-2 py-2 pl-1 rounded-lg ActiveLink"
          >
            <Transformations />
            <p className="text-sm">Transformations</p>
          </NavLink>
        </section>
        <hr className=" my-4" />
        <section className="flex flex-col mt-4 gap-4">
          <NavLink
            to="/Dashboard/account"
            className="flex gap-2 cursor-pointer ActiveLink py-2 pl-1 rounded-lg "
          >
            <Account /> <p className="text-sm">Account</p>
          </NavLink>
          <NavLink
            to="/Dashboard/settings"
            className="flex gap-2 py-2 pl-1 rounded-lg ActiveLink"
          >
            <Settings /> <p className=" text-sm">Settings </p>
          </NavLink>
        </section>
        <section className="flex flex-col gap-4 absolute bottom-[18%]">
          <NavLink
            to="/Dashboard/help"
            className="flex gap-2 py-2 pl-1 pr-3  rounded-lg text-[#32D583]  ActiveLink"
          >
            <Help />
            <p className="text-sm">Help</p>
          </NavLink>
          <NavLink
            to="/Dashboard/documentation"
            className="flex gap-2 py-2 pl-1 pr-3 rounded-lg text-[#32D583] ActiveLink"
          >
            <Documentaion />
            <p className="text-sm">Documentation</p>
          </NavLink>
        </section>
      </article>
    </section>
  );
}
