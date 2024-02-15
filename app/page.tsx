/* Components */
import BalanceTracker from "./components/BalanceTracker";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function IndexPage() {
  return (
    <div className="App">
      <Header/>
      <BalanceTracker />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Redux Toolkit",
};
