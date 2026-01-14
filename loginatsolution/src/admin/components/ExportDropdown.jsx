import { useState, useRef, useEffect } from "react";
import { FaFileExcel, FaFileCsv, FaChevronDown } from "react-icons/fa";

export default function ExportDropdown({ baseUrl }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const exportExcel = () => {
    window.open(`${baseUrl}/export`, "_blank");
    setOpen(false);
  };

  const exportCSV = () => {
    window.open(`${baseUrl}/export-csv`, "_blank");
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Export
        <FaChevronDown className="text-sm" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <button
            onClick={exportExcel}
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
          >
            <FaFileExcel className="text-green-600" />
            Export Excel
          </button>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
          >
            <FaFileCsv className="text-blue-600" />
            Export CSV
          </button>
        </div>
      )}
    </div>
  );
}
