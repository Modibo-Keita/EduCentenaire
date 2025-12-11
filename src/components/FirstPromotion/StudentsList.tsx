import { useState } from "react";
import { firstPromotionStudents } from "./students-data";
import { StudentCard } from "./StudentCard";

export function StudentsList() {
  const [villageFilter, setVillageFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // villages uniques pour le filtre
  const villages = Array.from(
    new Set(firstPromotionStudents.map((s) => s.village))
  );

  // filtrage
  const filtered = firstPromotionStudents.filter((s) => {
    return (
      (villageFilter === "" || s.village === villageFilter) &&
      (yearFilter === "" || s.year === Number(yearFilter))
    );
  });

  // pagination
  const totalPages = Math.ceil(filtered.length / perPage);
  const displayed = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6 mt-12">
      {/* 🔍 Filtres */}
      <div className="flex flex-col md:flex-row gap-4">
        <select
          className="p-2 border rounded"
          value={villageFilter}
          onChange={(e) => {
            setVillageFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Tous les villages</option>
          {villages.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={yearFilter}
          onChange={(e) => {
            setYearFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Toutes les années</option>
          <option value="1925">1925</option>
        </select>
      </div>

      {/* 🧑‍🎓 Liste */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((student) => (
          <StudentCard key={student.name} student={student} />
        ))}
      </div>

      {/* 🔢 Pagination */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Précédent
        </button>

        <span className="px-3 py-2 bg-muted rounded">
          Page {page} / {totalPages}
        </span>

        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
