import getCategoryColor from "./getcategorycolor";

export default function Blogpage() {
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col-9">
          <div className={` h6 mb-20 c-${getCategoryColor("Front-end")}`}>
            Front-end
          </div>
          <h2 className="mb-50">title</h2>
        </div>
      </div>
      <div className="row">
        <div className="col col-9">
          <p>whatever this blog is talking about</p>
        </div>
      </div>
    </div>
  );
}
