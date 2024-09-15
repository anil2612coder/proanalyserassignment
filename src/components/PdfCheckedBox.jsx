import { FaRegFilePdf } from "react-icons/fa6";
import { MdCheckBox } from "react-icons/md";
const PdfCheckedBox = () => {
  return (
    <div className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg shadow-sm ">
      <div>
        <FaRegFilePdf className="text-red-600" size={24} />
      </div>
      <div>
        <h3 className="font-semibold">Tech design requirements.pdf</h3>
        <p className="text-sm text-gray-500">200 KB</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-purple-500"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
      <div>
        <MdCheckBox className="text-purple-500 mb-3" size={24} />
        <div className="text-sm  text-gray-500">100%</div>
      </div>
    </div>
  );
};

export default PdfCheckedBox;
