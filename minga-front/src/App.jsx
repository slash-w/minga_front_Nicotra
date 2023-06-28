import Index from "./pages/Index";
import Main from "./layout/Main";


function App() {
  return (
    <div className="overflow-x-hidden m-auto my-0 flex relative flex-col min-h-screen w-full justify-between items-center bg-white">
      <Main>
        <Index />
      </Main>
    </div>
  );
}

export default App;
