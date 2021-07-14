import { BiCopyright } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="max-w-6-xl px-6 mx-auto bg-black pb-4">
      <div className="flex items-center justify-center text-white space-x-4 font-light uppercase text-xs">
        <BiCopyright className="mr-1"/> {new Date().getFullYear()}
        <span className="">Oladayo Olufemi</span>
      </div>
    </div>
  );
}
