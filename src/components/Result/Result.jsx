import { useData } from "../Providers/DataProvider";

const Result = () => {
  const [data] = useData();

  return (
    <div
      className="p-2 px-4 br-1 footer"
      style={{ backgroundColor: "#FEF5E7" }}
    >
      <div style={{ color: "#C76A15" }} className="text-start fs-4">
        Classification Result
      </div>
      <div
        className="text-start fs-5 ps-4 "
        style={{
          backgroundColor:
            data.isResultShow &&
            data.payload["Probability of ALL"] >
              data.payload["Probability of AML"]
              ? "#DC3545"
              : "",
          color:
            data.isResultShow &&
            data.payload["Probability of ALL"] >
              data.payload["Probability of AML"]
              ? "white"
              : "",
        }}
      >
        ALL: {data.isResultShow && data.payload["Probability of ALL"]}
      </div>
      <div
        className="text-start fs-5 ps-4"
        style={{
          backgroundColor:
            data.isResultShow &&
            data.payload["Probability of ALL"] <
              data.payload["Probability of AML"]
              ? "#DC3545"
              : "",
          color:
            data.isResultShow &&
            data.payload["Probability of ALL"] <
              data.payload["Probability of AML"]
              ? "white"
              : "",
        }}
      >
        AML: {data.isResultShow && data.payload["Probability of AML"]}
      </div>
    </div>
  );
};

export default Result;
