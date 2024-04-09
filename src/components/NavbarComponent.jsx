import React from "react";

const NavbarComponent = () => {
  return (
    <div className="h-lvh">
      <div className="bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')] w-full h-full  absolute opacity-50"></div>
      <div className="navbar p-5 relative">
        <div className="flex-1 ">
          <a className="btn btn-ghost text-xl">
            <img
              src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-10 text-white">
            <li className="px-3 hover:bg-white hover:text-black rounded-lg">
              <a>Home</a>
            </li>
            <li className="px-3 hover:bg-white hover:text-black rounded-lg">
              <a>Popular</a>
            </li>
            <li className="px-3 hover:bg-white hover:text-black rounded-lg">
              <a>Romance</a>
            </li>
            <li className="px-3 hover:bg-white hover:text-black rounded-lg">
              <a>Anime</a>
            </li>
          </ul>
          <div className="form-control">
            <input
              type="text"
              placeholder="Type to search..."
              className="input input-bordered w-24 h-10 md:w-auto bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
