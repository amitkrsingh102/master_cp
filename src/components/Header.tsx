/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { data: sessionData } = useSession();
  const pathname = usePathname();
  return (
    <div className="navbar flex justify-between bg-primary text-primary-content">
      <div className="text-md pl-5">
        {sessionData?.user ? sessionData?.user.name : "Guest"}
      </div>
      <div className="flex gap-10">
        <Link
          href={"/"}
          className={`${pathname === "/" && "font-bold underline"}`}
        >
          Home
        </Link>
        <Link
          href={"/problem-list"}
          className={`${pathname === "/problem-list" && "font-bold underline"}`}
        >
          Problem list
        </Link>
        <Link
          href={"/problem/101"}
          className={`${
            pathname?.includes("/problem/") && "font-bold underline"
          }`}
        >
          Playground
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {sessionData?.user ? (
            <>
              <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
                <div className=" w-10 rounded-full">
                  <img
                    src={sessionData.user.image!}
                    alt={sessionData.user.name!}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
              >
                <li
                  onClick={() => {
                    void signOut();
                  }}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </>
          ) : (
            <button
              className="btn btn-ghost rounded-btn"
              onClick={() => {
                void signIn();
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
