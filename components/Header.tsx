import { Fragment, useState } from "react";
import { classNames } from "../lib/utils";
import { LanguageSwitcher } from "../components";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
const navigation = ["home", "about", "projects", "contact"];
export default function Header() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isCurrent = (route: string) => route === currentRoute;

  return (
    <header className="py-6 sticky top-0 z-40 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex ml-auto space-x-12 items-center text-md">
          <>
            {navigation.map((route) => (
              <a
                key={route}
                href={`#${route}`}
                onClick={() => setCurrentRoute(route)}
                className={classNames(
                  isCurrent(route)
                    ? "font-semibold text-orange-600"
                    : "text-white"
                )}
              >
                {route.toUpperCase()}
              </a>
            ))}
            {/* <LanguageSwitcher /> */}
          </>
        </div>
        <div className="block md:hidden">
          <button
            type="button"
            className="px-4 border-gray-200 text-primary focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6 text-primary" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-50 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black px-6">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <Logo />
              <div className="mt-7 flex-1 h-0 overflow-y-auto">
                <nav className="space-y-4 flex flex-col text-lg">
                  {navigation.map((route) => (
                    <Link key={route} href={`#${route}`}>
                      <a
                        onClick={() => {
                          setCurrentRoute(route);
                          setSidebarOpen(false);
                        }}
                        className={classNames(
                          isCurrent(route)
                            ? "font-semibold text-orange-600"
                            : "text-white"
                        )}
                      >
                        {route.toUpperCase()}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
              {/* <LanguageSwitcher /> */}
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
