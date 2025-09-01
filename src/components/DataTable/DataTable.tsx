import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T extends { id: string | number }> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export default function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<Array<string | number>>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av == null) return 1;
      if (bv == null) return -1;
      if (String(av) < String(bv)) return sortAsc ? -1 : 1;
      if (String(av) > String(bv)) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortAsc]);

  function toggleRow(id: string | number) {
    const next = selectedIds.includes(id)
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];
    setSelectedIds(next);
    onRowSelect?.(data.filter((r) => next.includes(r.id)));
  }

  if (loading)
    return <div className="p-4 animate-pulse text-center">Loading...</div>;
  if (!data.length)
    return <div className="p-4 text-gray-500 text-center">No data available</div>;

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-md">
      <motion.table
        className="w-full border-collapse text-sm sm:text-base text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <thead className="bg-white/10 backdrop-blur-md">
          <tr>
            {selectable && (
              <th className="p-3 text-left text-sm font-semibold border-b border-white/20">
                Select
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-3 text-left text-sm font-semibold cursor-pointer select-none border-b border-white/20 hover:text-blue-300 transition"
                onClick={() => {
                  if (!col.sortable) return;
                  if (sortKey === col.dataIndex) setSortAsc((s) => !s);
                  else {
                    setSortKey(col.dataIndex);
                    setSortAsc(true);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  {col.title}
                  {col.sortable && sortKey === col.dataIndex && (
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: sortAsc ? 0 : 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▲
                    </motion.span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {sortedData.map((row, i) => (
              <motion.tr
                key={String(row.id)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className={`transition-colors ${
                  selectedIds.includes(row.id)
                    ? "bg-blue-500/20"
                    : "hover:bg-white/10"
                }`}
              >
                {selectable && (
                  <td className="p-3 border-b border-white/10">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="w-4 h-4 accent-blue-500 cursor-pointer"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="p-3 border-b border-white/10 text-sm sm:text-base"
                  >
                    {String(row[col.dataIndex] ?? "")}
                  </td>
                ))}
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </motion.table>
    </div>
  );
}
