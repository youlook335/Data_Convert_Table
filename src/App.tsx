import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./Auth";
import Dashboard from "./Dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // wait until auth state resolves
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/auth"} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/auth" />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
