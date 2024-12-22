import Button from "./Components/Button/Button";
import Student from "./Components/Student/Student";
import "./App.css";
import { Data } from "./data";
import Card from "./Components/Card/Card";

const App = () => {
  // let arr = ["faraz", "farooq", "hamza", "ali", "ahmed"] || [];
  // let arr = undefined || [];

  console.log(Data);

  return (
    <>
      <h1>App </h1>

      {Data ? (
        Data.map((e, i) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              imgSrc={e.imgSrc}
              title={e.title}
              desc={e.desc}
            />
          );
        })
      ) : (
        <h1>Data not fetch</h1>
      )}

      {/* <Card
        id={1}
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        title="title 01"
        desc="desc 01"
      /> */}

      {/* <select>
        {arr.map((element, index) => {
          return <option>{element}</option>;
        })}
      </select> */}
    </>
  );
};

export default App;
