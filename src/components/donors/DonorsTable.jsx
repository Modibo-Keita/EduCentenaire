import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * @typedef {Object} Donor
 * @property {string} name
 * @property {string} village
 * @property {string} residence
 * @property {number} amount
 */

/**
 * @param {{ donors: Donor[] }} props
 */
export default function DonorsTable({ donors }) {
  const [search, setSearch] = useState("");
  const [filterVillage, setFilterVillage] = useState("");
  const [filterResidence, setFilterResidence] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 8;

  const villages = [...new Set(donors.map((d) => d.village))];
  const residences = [...new Set(donors.map((d) => d.residence))];

  const filtered = useMemo(() => {
    return donors.filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) &&
        (!filterVillage || d.village === filterVillage) &&
        (!filterResidence || d.residence === filterResidence)
    );
  }, [donors, search, filterVillage, filterResidence]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortKey === "amount") return b.amount - a.amount;
      return a[sortKey].localeCompare(b[sortKey]);
    });
  }, [filtered, sortKey]);

  const totalAmount = sorted.reduce((sum, d) => sum + d.amount, 0);

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(sorted);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Donateurs");
    XLSX.writeFile(wb, "donateurs.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Liste des donateurs", 14, 15);
    autoTable(doc, {
      startY: 20,
      head: [["Nom", "Village", "Résidence", "Montant (FCFA)"]],
      body: sorted.map((d) => [
        d.name,
        d.village,
        d.residence,
        d.amount.toLocaleString(),
      ]),
    });
    doc.save("donateurs.pdf");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Donateurs</h2>

      {/* Outils */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
        <input
          placeholder="Recherche par nom…"
          className="border p-2 rounded-xl md:col-span-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-xl"
          value={filterVillage}
          onChange={(e) => {
            setPage(1);
            setFilterVillage(e.target.value);
          }}
        >
          <option value="">Village</option>
          {villages.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded-xl"
          value={filterResidence}
          onChange={(e) => {
            setPage(1);
            setFilterResidence(e.target.value);
          }}
        >
          <option value="">Résidence</option>
          {residences.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded-xl"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="name">Trier par nom</option>
          <option value="amount">Trier par montant</option>
        </select>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3 text-left">Nom</th>
              <th className="p-3 text-left">Village</th>
              <th className="p-3 text-left">Résidence</th>
              <th className="p-3 text-right">Montant (FCFA)</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((d, i) => (
              <tr key={i} className="border-t hover:bg-muted">
                <td className="p-3 font-medium">{d.name}</td>
                <td className="p-3">{d.village}</td>
                <td className="p-3">{d.residence}</td>
                <td className="p-3 text-right font-semibold">
                  {d.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          ◀
        </button>
        <span>
          Page {page} / {totalPages || 1}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          ▶
        </button>
      </div>

      {/* Export */}
      <div className="flex gap-3 mt-4">
        <button onClick={exportExcel} className="btn">
          Excel
        </button>
        <button onClick={exportPDF} className="btn bg-red-600 text-white">
          PDF
        </button>
      </div>

      <div className="mt-4 p-3 bg-primary/10 rounded-xl font-bold">
        Total collecté : {totalAmount.toLocaleString()} FCFA
      </div>
    </motion.div>
  );
}
