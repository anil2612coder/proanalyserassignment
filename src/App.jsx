import DashboardSpinnerBox from "./components/DashboardSpinnerBox";
import PdfCheckedBox from "./components/PdfCheckedBox";
import PdfCheckedBoxWithoutBar from "./components/PdfCheckedBoxWithoutBar";
import PdfDeletebox from "./components/PdfDeletebox";
import UploadSection from "./components/UploadSection";
const App = () => {
  return (
    <div className="bg-gray-200 px-4 py-2 h-screen w-screen">
      <div className="bg-white border-dashed border-2 w-full rounded-md border-gray-400 p-3">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          <UploadSection />
          <UploadSection />
          <UploadSection />
          <UploadSection />
          <UploadSection />
          <UploadSection />
          <UploadSection />
          <UploadSection />
        </div>
        <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-4">
          <PdfCheckedBox />
          <PdfCheckedBox />
          <PdfCheckedBoxWithoutBar />
          <PdfCheckedBoxWithoutBar />
          <PdfDeletebox
            size={40}
            color={`blue`}
            title={`Dashboard recording.mp4`}
          />
          <PdfDeletebox
            size={40}
            color={`blue`}
            title={`Dashboard recording.mp4`}
          />
          <DashboardSpinnerBox
            size={70}
            title={`Dashboard recording.mp4`}
            color={`blue`}
          />
          <DashboardSpinnerBox
            size={70}
            title={`Dashboard recording.mp4`}
            color={`blue`}
          />
          <PdfDeletebox
            size={80}
            color={`purple`}
            title={`Dashboard prototype Final.fig`}
          />
          <PdfDeletebox
            size={80}
            color={`purple`}
            title={`Dashboard prototype Final.fig`}
          />
          <DashboardSpinnerBox
            size={70}
            title={`Dashboard prototype Final.fig`}
            color={`purple`}
          />
          <DashboardSpinnerBox
            size={70}
            title={`Dashboard prototype Final.fig`}
            color={`purple`}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
