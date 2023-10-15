import {
  Headericon,
  Signflow,
  Events,
  Pipeline,
  Source,
  Destination,
  Transformations,
  Account,
  Settings,
  Help,
  Documentaion,
  Createnew,
  Filter,
  Search,
  Paused,
  Archived,
  IconFive,
  IconTen,
  Iconfifteen,
} from "./Svg";
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Popover } from "@headlessui/react";
import {AiOutlineEye} from 'react-icons/ai'
import {LiaStoreSolid} from 'react-icons/lia'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function Dashboard(){
    return (
      <main className="pt-7 pl-7 flex ">
        <section className=" w-[248px] h-[100vh]">
          <h1 className=" text-[#32D583] text-2xl font-semibold font-Inter mt-2">
            Sigflow
          </h1>
          <article className=" mt-7 relative h-[100vh]">
            <Signflow />
            <ul className="flex flex-col mt-4 gap-4 mr-10">
              <li className="flex gap-2 text-[#828282] pl-1">
                <Events /> <p className=" -mt-[2px]">Events</p>
              </li>
              <li className="flex gap-2 text-[#828282] pl-1">
                <Pipeline /> <p className=" -mt-[2px]">Pipeline</p>
              </li>
              <li className="flex gap-2 text-[#828282] pl-1">
                <Source /> <p className=" -mt-[2px]">Source</p>
              </li>
              <li className="flex gap-2 text-[#828282] pl-1">
                <Destination /> <p className=" -mt-[2px]">Destination</p>
              </li>
              <li className="flex gap-2 text-[#32D583] bg-[#ECFDF3] py-2 pl-1 rounded-lg ">
                <Transformations />
                <p className=" -mt-[2px]">Transformations</p>
              </li>
            </ul>
            <hr className=" my-4" />
            <ul className="flex flex-col mt-4 gap-4">
              <li className="flex gap-2 text-[#828282] pl-1">
                <Account /> <p className=" -mt-[2px]">Account</p>
              </li>
              <li className="flex gap-2 text-[#828282] pl-1">
                <Settings /> <p className=" -mt-[2px]">Settings </p>
              </li>
            </ul>
            <ul className="flex flex-col mt-4 gap-4 absolute bottom-[25%]">
              <li className="flex gap-2 text-[#32D583] ">
                <Help />
                <p className=" -mt-[2px]">Help</p>
              </li>
              <li className="flex gap-2 text-[#32D583] ">
                <Documentaion />
                <p className=" -mt-[2px]">Transformations</p>
              </li>
            </ul>
          </article>
        </section>
        <section className="w-full">
          <header className="border-b border-[#E6E7EC] pb-1 flex justify-end">
            <Headericon />
          </header>
          <article className=" mt-7 px-3">
            <div className="flex justify-between gap-4">
              <h2 className=" font-semibold text-xl">TransFormation</h2>
              <div className="flex gap-3">
                <Createnew /> <Filter />
              </div>
            </div>
            <section className=" flex justify-end mt-3 relative">
              <input
                type="text"
                className=" w-[320px] py-2 pl-4 pr-8 outline-none border rounded-lg border-[#828282] "
                placeholder="Search transformation"
              />
              <span className=" absolute top-2 right-2">
                <Search />
              </span>
            </section>
          </article>
          <div className="mt-5 h-[65vh] border text-[#828282] border-solid relative p-3">
            <ul className="flex w-full justify-center text-xs">
              <li className=" w-[40%]">Name</li>
              <li className=" w-[40%]">Creation Date</li>
              <li className=" w-[40%]">Status</li>
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