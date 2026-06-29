import bgImg from "../../assets/vector1.png";
const TrackingCard = ({progressCount,resolveCount}) => {

  return (
    <div className="my-20 flex justify-between w-11/12 mx-auto">
      <div
        className="py-15 px-70 text-center text-white rounded-md"
        style={{
          backgroundImage: `linear-gradient(rgb(99, 46, 227),rgb(159, 98, 242)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>In-Progress</p>
        <p className="text-5xl font-bold mt-2">{progressCount}</p>
      </div>
      <div
        className="py-15 px-70 text-center text-white rounded-md"
        style={{
          backgroundImage: `linear-gradient(rgb(84 207 104),rgb(0 130 122)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>Resolved</p>
        <p className="text-5xl font-bold mt-2">{resolveCount}</p>
      </div>
    </div>
  );
};

export default TrackingCard;
