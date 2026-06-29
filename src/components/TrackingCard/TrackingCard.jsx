import bgImg from "../../assets/vector1.png";
const TrackingCard = ({progressCount}) => {

  return (
    <div className="my-20 flex justify-between w-11/12 mx-auto">
      <div
        className="py-15 px-70 text-center text-white rounded-md"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 46, 227, 0.75),rgba(159, 98, 242, 0.75)), url(${bgImg})`,
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
          backgroundImage: `linear-gradient(rgba(99, 46, 227, 0.75),rgba(159, 98, 242, 0.75)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>Resolved</p>
        <p className="text-5xl font-bold mt-2">0</p>
      </div>
    </div>
  );
};

export default TrackingCard;
