import { Hero } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="h-96">
        This is about section
      </div>
    </>
  );
}
