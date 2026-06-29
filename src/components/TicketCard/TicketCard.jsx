
const TicketCard = ({ticket,handleTask}) => {
    const {id,title,description,customer,priority,status,createdAt} = ticket
    return (
        <button onClick={()=>handleTask(ticket)} className="bg-white p-4 rounded-xl">
            <div className="flex justify-between">
                <h4 className="font-bold">{title}</h4>
                <p className="badge bg-amber-200">{status}</p>
               
            </div>
             <p className="text-[#627382] text-md my-2 text-start">{description}</p>
             <div className="flex justify-between">
                <div className="flex justify-between gap-4">
                    <p className="text-[#627382]">{id}</p>
                    <p>{priority}</p>
                </div>
                <div className="flex justify-between gap-3 text-[#627382]">
                    <p>{customer}</p>
                    <p>{createdAt}</p>
                </div>

             </div>
        </button>
    );
};

export default TicketCard;