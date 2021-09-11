import { useState } from "react";
import ProjectItem from "./ProjectItem";
//! ScreenShots
import CalculatorJS from "./Img/calculator.png";
import RecordShop from "./Img/RecordShop.png";
import SocialMedia from "./Img/socialMedia.png";
import CovidGame from "./Img/covidGame.png";
import CurrencyConverter from "./Img/foreignConvert.png";
import FetchFlix from "./Img/fetchFlix.png";
import CurrentWeather from "./Img/CurrentWeather.png";
import GroceryList from "./Img/MERN GroceryList.png";
import ExpenseTracker from "./Img/expenseTracker.png";
import SearchEngine from "./Img/searchEngine.png";
function MyProjects() {
  const [projectState, setProjectState] = useState([
    {
      id: 1,
      image: FetchFlix,
      title: "Streaming Page (React)",
      explanation: "React",
      link: "https://muratcanoncu.github.io/Movie-Browser-React/",
      repoLink: "https://github.com/muratcanoncu/Movie-Browser-React",
    },
    {
      id: 2,
      image: RecordShop,
      title: "Record Shop (React)",
      explanation: "Online Shop",
      link: "https://reactproject-fbw41-1.github.io/Record-Shop-project/#/",
      repoLink: "https://github.com/ReactProject-FbW41-1/Record-Shop-project",
    },
    {
      id: 3,
      image: SocialMedia,
      title: "Social Media (React)",
      explanation: "Log In,Sign Up,add Post,Delete Post,Like Post",
      link: "https://muratcanoncu.github.io/socialMediaApp-React/#/",
      repoLink: "https://github.com/muratcanoncu/socialMediaApp-React",
    },
    {
      id: 4,
      image: GroceryList,
      title: "Grocery List (MERN)",
      explanation: "Adding, removing, updating items in the list",
      link: "https://muratcanoncu.github.io/ActiveITfrontend/#/",
      repoLink: "https://github.com/muratcanoncu/ActiveITfrontend",
    },
    {
      id: 5,
      image: CovidGame,
      title: "Covid Hit Game (JavaScript)",
      explanation: "Javascript fundamentals,DOM manipulation,Asynchronized JS",
      link: "https://muratcanoncu.github.io/Covid-hitting-game/",
      repoLink: "https://github.com/muratcanoncu/Covid-hitting-game",
    },
    {
      id: 6,
      image: CurrencyConverter,
      title: "Currency Converter (JavaScript)",
      explanation: "Pure JavaScript,DOM Manipulation",
      link: "https://muratcanoncu.github.io/foreignCurrencyConverter/",
      repoLink: "https://github.com/muratcanoncu/foreignCurrencyConverter",
    },
    {
      id: 7,
      image: CurrentWeather,
      title: "Current Weather (JavaScript)",
      explanation: "Browse Weather by City Name",
      link: "https://muratcanoncu.github.io/CurrentWeather/",
      repoLink: "https://github.com/muratcanoncu/CurrentWeather",
    },
    {
      id: 8,
      image: CalculatorJS,
      title: "Calculator (JavaScript)",
      explanation: "Calculator",
      link: "https://muratcanoncu.github.io/Calculator/",
      repoLink: "https://github.com/muratcanoncu/Calculator",
    },
    {
      id: 9,
      image: ExpenseTracker,
      title: "Expense Tracker(React)",
      explanation: "Expense Tracker",
      link: "https://muratcanoncu.github.io/expenseBook-react/",
      repoLink: "https://github.com/muratcanoncu/expenseBook-react",
    },
    {
      id: 10,
      image: SearchEngine,
      title: "Search Engine (React)",
      explanation: "Cocktail Search Engine",
      link: "https://muratcanoncu.github.io/Cocktail-SEngine-react/",
      repoLink:
        "https://github.com/muratcanoncu/Cocktail-SEngine-react/tree/master",
    },
  ]);
  return (
    <>
      <h2
        id="myProjects"
        style={{ fontFamily: "Overpass", fontSize: "3.2rem" }}
        className="text-center my-3"
      >
        My Projects
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {projectState.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              img={project.image}
              title={project.title}
              explanation={project.explanation}
              browserLink={project.link}
              repoLink={project.repoLink}
            ></ProjectItem>
          );
        })}
      </div>
    </>
  );
}

export default MyProjects;
