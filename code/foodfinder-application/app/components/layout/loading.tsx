import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <ClipLoader size={40} color={"#fff"} loading={true} />
    </div>
  );
};

export default Loading;
