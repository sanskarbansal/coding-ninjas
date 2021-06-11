import "./App.css";
import EventsContainer from "./components/EventsContainer";
import Header from "./components/Header";
function App() {
    return (
        <div className="App">
            <Header />
            <div className="mx-auto mt-4" style={{ width: "90%" }}>
                <EventsContainer />
            </div>
        </div>
    );
}

export default App;
