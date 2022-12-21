import rasm from "./assets/img/roma.jpg"

function HotNews() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <img src={rasm} alt="img" width="500px" />
      <div style={{ backgroundColor: "gray", color: "white" }}>
        <span>20/12/2020</span>
        <h1 style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem,
          consectetur numquam id molestias sequi! Incidunt similique optio
          obcaecati eligendi?
        </h1>
        <h1>hello world</h1>
      </div>
    </div>
  )
}

export default HotNews
