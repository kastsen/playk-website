import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
        <div style={{ background: "linear-gradient(to top, #132335, #100703)" }}>
          <Portfolio/>
        </div>
        <Contact/>
    </>
  );
}
