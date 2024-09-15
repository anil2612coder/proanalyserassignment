import { LuUploadCloud } from "react-icons/lu";
// import { MdCloudUpload } from "react-icons/md";

const UploadSection = () => {
  return (
    <div className="p-3  border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center h-32">
      <LuUploadCloud
        className="text-gray-700 p-2 border-[1px] border-gray-300 rounded-md shadow-md"
        size={48}
      />

      <p className="text-gray-500 mt-3">
        <span className="font-bold text-violet-900">Click to upload</span>
        <span> or drag and drop</span>
      </p>
      <p className="text-gray-400 text-sm">
        SVG, PNG, JPG or GIF (max. 800x400px)
      </p>
    </div>
  );
};

export default UploadSection;
