import "./main.css"
import HotNews from "./HotNews.jsx"

function Main({ name, surname, age, Icon }) {
  return (
    <main>
      <section className="left">
        <HotNews />
      </section>
      <section className="right">
        <h1 style={{ color: "white" }}>
          {name} {age}
          {Icon}
        </h1>
        <h1>{surname}</h1>
      </section>
    </main>
  )
}
export default Main

// const props = {
//   name: "Xudish",
//   surname: "test",
// }
// const { name, surname } = props

// function test(props) {
//   props.name
// }
// test({ name: "Xudish", surname: "test" })
