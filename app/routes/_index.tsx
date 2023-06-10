import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Scrolling, scrolling, scrolling, …" },
    { name: "description", content: "Scrolling…" },
  ];
};

export default function Index() {
  return (
    <div className="pages">

      <div className="page" style={{ backgroundColor: "hotpink" }}>
        <div className="slides">
          <div className="slide" style={{ backgroundColor: "orange" }}>
            <h1>Slide 1</h1>
          </div>
          <div className="slide" style={{ backgroundColor: "limegreen" }}>
            <h1>Slide 2</h1>
          </div>
          <div className="slide" style={{ backgroundColor: "cyan" }}>
            <h1>Slide 3</h1>
          </div>
        </div>
      </div>

      <div className="page" style={{ backgroundColor: "yellow" }}>
        <div className="slides">
          <div className="slide" style={{ backgroundColor: "red" }}>
            <h1>Slide 4</h1>
          </div>
          <div className="slide" style={{ backgroundColor: "blue" }}>
            <h1>Slide 5</h1>
          </div>
          <div className="slide" style={{ backgroundColor: "purple" }}>
            <h1>Slide 6</h1>
          </div>
        </div>
      </div>

    </div>
  );
}
