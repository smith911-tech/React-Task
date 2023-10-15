import {
  Headericon,
  Createnew,
  Filter,
  Search,
  Paused,
  Archived,
  IconFive,
  IconTen,
  Iconfifteen,
} from "./Svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import { AiOutlineEye } from "react-icons/ai";
import { LiaStoreSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import Sidebar from "./Sidebar";

export default function TransFormation() {
  return (
    <main className="pt-7 pl-7 flex ">
      <Sidebar />
      <section className="w-full ml-[248px]">
        <header className="border-b border-[#E6E7EC] pb-1 flex justify-end mr-5">
          <Headericon />
        </header>
        <article className=" mt-7 px-3">
          <div className="flex justify-between gap-4 ">
            <h2 className=" font-semibold text-xl">TransFormation</h2>
            <div className="flex gap-3">
              <Createnew /> <Filter />
            </div>
          </div>
          <section className=" flex justify-end mt-3 relative">
            <input
              type="text"
              className=" w-[320px] py-2 pl-4 pr-8 outline-none border rounded-lg border-[#E6E7EC]"
              placeholder="Search transformation"
            />
            <span className=" absolute top-2 right-2">
              <Search />
            </span>
          </section>
        </article>
        <div className="mt-5 h-[100vh] border text-[#828282] border-solid relative p-3 mr-5  mb-8">
          <ul className="flex w-full justify-center text-xs">
            <li className=" w-[40%]">Name</li>
            <li className=" w-[40%]">Creation Date</li>
            <li className=" w-[40%]">Status</li>
          </ul>
          <ul className="flex w-full justify-center mt-10 text-xs border-b pb-3">
            <li className=" w-[40%]">Gotham Asylum</li>
            <li className=" w-[40%]">10th Aug, 2023</li>
            <li className=" w-[40%] flex gap-14">
              <span className="w-[20%]">
                <Paused />
              </span>
              <Popover className="relative">
                <Popover.Button className=" outline-none">
                  <span className=" text-xl w-[40%] cursor-pointer ">
                    <BsThreeDotsVertical />
                  </span>
                </Popover.Button>
                <Popover.Panel className=" absolute bg-white w-[170px] shadow-2xl right-5 px-2 py-3">
                  <div className="flex gap-2">
                    <AiOutlineEye className=" text-lg" />
                    <p>View Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <LiaStoreSolid className=" text-lg" />
                    <p>Archive Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3 text-[red]">
                    <RiDeleteBin6Line className=" text-lg" />
                    <p>Delete</p>
                  </div>
                </Popover.Panel>
              </Popover>
            </li>
          </ul>
          <ul className="flex w-full justify-center mt-5 text-xs border-b pb-3">
            <li className=" w-[40%]">Gotham Asylum</li>
            <li className=" w-[40%]">10th Aug, 2023</li>
            <li className=" w-[40%] flex gap-14">
              <span className="w-[20%]">
                <Archived />
              </span>
              <Popover className="relative">
                <Popover.Button className=" outline-none">
                  <span className=" text-xl w-[40%] cursor-pointer ">
                    <BsThreeDotsVertical />
                  </span>
                </Popover.Button>
                <Popover.Panel className=" absolute bg-white w-[170px] shadow-2xl right-5 px-2 py-3">
                  <div className="flex gap-2">
                    <AiOutlineEye className=" text-lg" />
                    <p>View Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <LiaStoreSolid className=" text-lg" />
                    <p>Archive Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3 text-[red]">
                    <RiDeleteBin6Line className=" text-lg" />
                    <p>Delete</p>
                  </div>
                </Popover.Panel>
              </Popover>
            </li>
          </ul>
          <ul className="flex w-full justify-center mt-5 text-xs border-b pb-3">
            <li className=" w-[40%]">Gotham Asylum</li>
            <li className=" w-[40%]">10th Aug, 2023</li>
            <li className=" w-[40%] flex gap-14">
              <span className="w-[20%]">
                <Paused />
              </span>
              <Popover className="relative">
                <Popover.Button className=" outline-none">
                  <span className=" text-xl w-[40%] cursor-pointer ">
                    <BsThreeDotsVertical />
                  </span>
                </Popover.Button>
                <Popover.Panel className=" absolute bg-white w-[170px] shadow-2xl right-5 px-2 py-3">
                  <div className="flex gap-2">
                    <AiOutlineEye className=" text-lg" />
                    <p>View Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <LiaStoreSolid className=" text-lg" />
                    <p>Archive Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3 text-[red]">
                    <RiDeleteBin6Line className=" text-lg" />
                    <p>Delete</p>
                  </div>
                </Popover.Panel>
              </Popover>
            </li>
          </ul>
          <ul className="flex w-full justify-center mt-5 text-xs border-b pb-3">
            <li className=" w-[40%]">Gotham Asylum</li>
            <li className=" w-[40%]">10th Aug, 2023</li>
            <li className=" w-[40%] flex gap-14">
              <span className="w-[20%]">
                <Archived />
              </span>
              <Popover className="relative">
                <Popover.Button className=" outline-none">
                  <span className=" text-xl w-[40%] cursor-pointer ">
                    <BsThreeDotsVertical />
                  </span>
                </Popover.Button>
                <Popover.Panel className=" absolute bg-white w-[170px] shadow-2xl right-5 px-2 py-3">
                  <div className="flex gap-2">
                    <AiOutlineEye className=" text-lg" />
                    <p>View Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <LiaStoreSolid className=" text-lg" />
                    <p>Archive Transformation</p>
                  </div>
                  <div className="flex gap-2 mt-3 text-[red]">
                    <RiDeleteBin6Line className=" text-lg" />
                    <p>Delete</p>
                  </div>
                </Popover.Panel>
              </Popover>
            </li>
          </ul>
          <div className=" absolute bottom-[1%] flex gap-2">
            <IconFive /> <IconTen /> <Iconfifteen />
          </div>
        </div>
      </section>
    </main>
  );
}
