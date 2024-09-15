import { BiSolidFilePdf } from "react-icons/bi";

import { MdCheckBox } from "react-icons/md";

const PdfCheckedBoxWithoutBar = () => {
  return (
    <div className="flex items-center justify-between border-2 border-gray-300 rounded-lg shadow-sm ">
      <div>
        <BiSolidFilePdf className="text-red-600" size={28} />
      </div>
      <div>
        <h3 className="font-semibold">Tech design requirements.pdf</h3>
        <p className="text-sm text-gray-500">200 KB - 100% uploaded</p>
      </div>
      <div>
        <MdCheckBox className="text-purple-500 mb-3" size={24} />
      </div>
    </div>
  );
};

export default PdfCheckedBoxWithoutBar;
