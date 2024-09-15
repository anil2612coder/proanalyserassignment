import { FaRegFilePdf } from "react-icons/fa6";
import { RiDeleteBin3Line } from "react-icons/ri";

const PdfDeletebox = (props) => {
  const { size, color, title } = props; // Destructure the size from props

  return (
    <div className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg shadow-sm">
      <div>
        <FaRegFilePdf style={{ color: color }} size={24} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">16 KB</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-purple-500"
            style={{ width: `${size}%` }}
          ></div>
        </div>
      </div>
      <div>
        <RiDeleteBin3Line className="text-gray-500 mb-3" size={24} />
        <div className="text-sm text-gray-500">{size}%</div>{" "}
      </div>
    </div>
  );
};

export default PdfDeletebox;
