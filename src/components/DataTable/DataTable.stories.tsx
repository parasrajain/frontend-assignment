import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

type User = { id: number; name: string; age: number };

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable, // 👈 no generics here
};
export default meta;

const sample: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 28 },
  { id: 3, name: "Charlie", age: 30 },
];

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: sample,
    columns: [
      { key: "name", title: "Name", dataIndex: "name", sortable: true },
      { key: "age", title: "Age", dataIndex: "age", sortable: true },
    ] as any, // 👈 force-cast, bypass TS error
    selectable: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ] as any,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ] as any,
    loading: true,
  },
};
