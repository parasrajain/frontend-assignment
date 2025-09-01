import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const sampleUsers: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 28 },
  { id: 3, name: "Charlie", age: 30 },
];

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col gap-10 text-white">
        <h1 className="text-4xl font-bold text-center">React Assignment Demo</h1>

        {/* InputField */}
        <div className="max-w-md mx-auto w-full">
          <InputField
            label="Username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            helperText="Please enter your username"
            invalid={username.length > 10}
            errorMessage="Username too long"
            variant="outlined"
            size="md"
          />
        </div>

        {/* DataTable */}
        <div className="w-full">
          <DataTable<User>
            data={sampleUsers}
            columns={[
              { key: "name", title: "Name", dataIndex: "name", sortable: true },
              { key: "age", title: "Age", dataIndex: "age", sortable: true },
            ]}
            selectable
            onRowSelect={(rows) => console.log("Selected:", rows)}
          />
        </div>
      </div>
    </div>
  );
}


