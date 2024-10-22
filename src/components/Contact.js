import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded flex items-center">
          Contact
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <div>
            <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              benfischerj@gmail.com
            </p>
            <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              0455 244 168
            </p>
          </div>
          <MenuItem>
            <a
              href="https://www.linkedin.com/in/ben-jackson-549a16294/"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              target="blank"
            >
              LinkedIn
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://github.com/benfjackson"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              target="blank"
            >
              GitHub
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
