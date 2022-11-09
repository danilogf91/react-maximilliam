import Expenses from "./components/Expenses/Expenses.js";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.67,
      date: new Date(2020, 5, 28),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 500.67,
      date: new Date(2021, 6, 11),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New sofa",
      amount: 350.56,
      date: new Date(2020, 11, 20),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
