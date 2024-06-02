import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  var twoSum = function(nums, target) {
    let arry = []
    return nums.map((num, i)=>{
      //  console.log(i);
       return arry.push(nums[i])
      //  arry.push(nums[i+1])
       
          // if ((nums[i] + nums [i + 1] === target)){
          //         return arry
          //         console.log(true);
          // }
      })
  };
  console.log(twoSum([1, 4, 5], 5))

  const showHandler = (type) => {
    if (type !== "home") {
      setShow(!show);
    } else if (type === "home" && show === true) {
      setShow(!show);
    }

    if (type !== "menu") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <React.Fragment>
      <section
        className={`px-4 ${
          show ? "h-screen" : "h-16"
        }  top-0 main fixed z-30 left-0 right-0 transition-all delay-400 duration-300 pt-2 lg:h-20 lg:px-10 w-full flex flex-col lg:flex-row lg:justify-between lg:items-center`}
      >
        <div className="flex flex-row justify-between w-full items-center">
          <Link to="/">
            <h1
              className=" text-white font-bold text-2xl"
              onClick={() => showHandler("home")}
            >
              mayhoral.dev
            </h1>
          </Link>
          {!show ? (
            <FiMenu
              onClick={() => showHandler("menu")}
              className="text-white cursor-pointer font-bold text-2xl lg:hidden"
            />
          ) : (
            <FaXmark
              onClick={() => showHandler("menu")}
              className="text-white cursor-pointer font-bold text-2xl lg:hidden"
            />
          )}
        </div>
        <article
          className={`${
            show ? "visible" : "hidden"
          } flex flex-col justify-evenly items-center h-screen lg:h-0 lg:flex lg:flex-row  lg:space-x-5`}
        >
          <div className="flex flex-col  text-white lg:flex-row lg:space-x-10">
            <Link to="/projects">
              <span className="text-xl h-1/2" onClick={showHandler}>
                Projects
              </span>
            </Link>
          </div>
          <div className="text-white">
            <Link to="/contact">
              <span className="text-xl h-1/2" onClick={showHandler}>
                Contact
              </span>
            </Link>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
export default Navbar;
