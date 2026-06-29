import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleTask = (t) => {
    const isExist = task.find((item) => item.id == t.id);
    if (!isExist) {
      setTask([...task,t]);
    } else {
      alert("already exist");
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-semibold text-xl">Customer Tickets</h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9 grid grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleTask={handleTask}
            ></TicketCard>
          ))}
        </div>
        <div className="cart-container col-span-3">
          <h2 className="font-bold">Task Status</h2>
          {task.map((item) => (
            <div className="bg-white p-3 mb-2 rounded-md">
              <h3 className="text-center font-semibold">{item.title}</h3>
              <button className="btn bg-[#02A53B] text-white w-full mt-1">Complete</button>
            </div>
          ))}
          <h2 className="font-bold">Resolved Task</h2>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
