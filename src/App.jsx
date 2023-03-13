import Networks from "./components/Networks";
import Form from "./components/Form";
import Card from "./components/Card";
import HelloWorld from "./components/HelloWorld";
import Photos from "./components/Photos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <article id="start">
        <HelloWorld/>

        <Photos/>
      </article>

      <article id="projects">
        <Card/>
      </article>

      <article id="contact">
        <Form/>

        <Networks/>
      </article>
    </>
  );
}

export default App;
