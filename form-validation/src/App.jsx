import "./App.css";
import YupValidation from "./components/YupValidation";
import useOnlineNotification from "./customHooks/useOnlineNotification";

function App() {
  useOnlineNotification();
  
  return (
    <>
      <div className="mx-auto h-screen  w-[80%]">
        <h1 className="text-2xl text-center my-10">Basic forms</h1>
        <YupValidation/>
      </div>
    </>
  );
}

export default App;
