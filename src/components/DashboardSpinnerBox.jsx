import { BiSolidFilePdf } from "react-icons/bi";

const DashboardSpinnerBox = (props) => {
  const { size, color, title } = props;
  const radius = 20;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (size / 100) * circumference;

  return (
    <div className="relative flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg shadow-sm">
      <div
        className="absolute inset-0 bg-gray-200 opacity-70 z-0"
        style={{ width: "70%" }}
      ></div>

      <div className="relative z-10 flex items-center">
        <div>
          <BiSolidFilePdf style={{ color: color }} size={32} />
        </div>
        <div className="ml-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">16mb - {size}% upload</p>
        </div>
        <div className="relative flex justify-center items-center ml-4">
          <svg
            width={radius * 2 + strokeWidth}
            height={radius * 2 + strokeWidth}
            className="transform -rotate-90"
          >
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={strokeWidth}
              stroke="gray"
              className="text-gray-400"
              fill="none"
            />

            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={strokeWidth}
              stroke="purple"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DashboardSpinnerBox;
