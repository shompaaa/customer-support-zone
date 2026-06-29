import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";

const Tickets = ({
  setProgressCount,
  progressCount,
  resolveCount,
  setResolveCount,
}) => {
  const [tickets, setTickets] = useState([]);
  const [task, setTask] = useState([]);
  const [resolveTask, setResolveTask] = useState([]);

  useEffect(() => {
    fetch("tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleTask = (t) => {
    const isExist = task.find((item) => item.id == t.id);
    if (!isExist) {
      setTask([...task, t]);
      setProgressCount(progressCount + 1);
    } else {
      alert("already exist");
    }
  };

  const handleComplete = (i) => {
    const resolved = resolveTask.find((item) => item.id == i.id);
    if (!resolved) {
      setResolveTask([...resolveTask, i]);
    }
    const remaining = task.filter((item) => item.id !== i.id);
    setTask(remaining);
    const remainingTickets = tickets.filter(item =>item.id !== i.id)
    setTickets(remainingTickets)
    setResolveCount(resolveCount + 1);
    setProgressCount(progressCount - 1);
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
          <div className="mb-3">
            <h2 className="font-bold mb-1">Task Status</h2>
            {task.length < 1 ? (
              <small className="text-[#627382]">
                Select a ticket to add to Task Status
              </small>
            ) : (
              <div>
                {task.map((item) => (
                  <div className="bg-white p-3 mb-3 rounded-md">
                    <h3 className="text-center font-semibold">{item.title}</h3>
                    <button
                      onClick={() => handleComplete(item)}
                      className="btn bg-[#02A53B] text-white w-full mt-1"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="font-bold mb-1">Resolved Task</h2>
            {resolveTask.length === 0 ? (
              <small className="text-[#627382]">No resolve task yet</small>
            ) : (
              <div>
                {" "}
                {resolveTask.map((item) => (
                  <div key={item.id} className="bg-[#E0E7FF] font-semibold text-center p-3 mb-2 rounded">
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
