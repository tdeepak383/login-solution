import React, { useEffect, useState } from "react";

function ConsentFormList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/consentform");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/consentform/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (res.ok) {
        // Remove from UI instantly
        setData((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(result.message || "Delete failed");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Consent Form List
        </h2>
        <p className="text-gray-500 text-sm">
          Manage all submitted consent forms
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading data...
          </div>
        ) : data.length === 0 ? (
          <div className="p-6 text-center text-gray-400">
            No records found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              {/* Head */}
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Created At</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-4 text-gray-600">
                      {item.email || "-"}
                    </td>
                    <td className="p-4 text-gray-600">
                      {item.phone}
                    </td>
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(item.created_at).toLocaleString()}
                    </td>

                    {/* ✅ Delete Button */}
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsentFormList;