import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="bg-background text-text-primary h-screen w-screen">
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
