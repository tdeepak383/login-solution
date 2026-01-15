import { useState, useRef, useEffect } from "react";
import { FaFileExcel, FaFileCsv, FaChevronDown } from "react-icons/fa";

export default function ExportDropdown({ baseUrl, from, to }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const buildUrl = (type) => {
    let url = `${baseUrl}/${type}`;
    if (from && to) {
      url += `?from=${from}&to=${to}`;
    }
    return url;
  };

  // ✅ Common export handler (Excel / CSV)
const handleExport = async (type, filename) => {
  try {
    setLoading(true);
    setOpen(false);

    const res = await fetch(buildUrl(type));
    const contentType = res.headers.get("content-type");

    // No data fallback
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      alert("No data found");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error(err);
    alert("Export failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        disabled={loading}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
      >
        {loading ? "Exporting..." : "Export"}
        <FaChevronDown className="text-sm" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <button
            onClick={() =>
              handleExport("export", "data.xlsx")
            }
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
          >
            <FaFileExcel className="text-green-600" />
            Export Excel
          </button>

          <button
            onClick={() =>
              handleExport("export-csv", "data.csv")
            }
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
