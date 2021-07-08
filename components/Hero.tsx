import { Logo, Navbar } from "../components";

export default function Hero() {
  return (
    <div className="min-h-screen bg-blue-900">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex justify-between">
          <Logo />
          <div className="flex-1 border">
          <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
