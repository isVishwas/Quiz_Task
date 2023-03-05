import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import Footer from "./components/footer";
import Header from "./components/Header";
// import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
// import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScoreScreen from "./screens/ResultScreen";
import Quiz from "./screens/Quiz";
import AnswersScreen from "./screens/AnswersScreen";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import ShippingScreen from "./screens/ShippingScreen";
// import PaymentScreen from "./screens/PaymentScreen";
// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
// import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={Quiz} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />

          <ProtectedRoute>

            <Route path="/quiz/result" component={ScoreScreen} />
            <Route path="/quiz/answers" component={AnswersScreen} />

            <Route path="/profile" component={ProfileScreen} />
            <Route path="/quiz" component={HomeScreen} exact />

          </ProtectedRoute>

        </Container>
      </main>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
