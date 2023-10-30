"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const [workflows, setWorkflows] = useState([]);
  const fetchAllWorkflow = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/workflow");
    console.log(response.data);
    setWorkflows(response.data);
  };
  useEffect(() => {
    fetchAllWorkflow();
  }, []);
  return (
    <main className="m-10">
      <Link href={`/workflow/${uuidv4()}`}>create new workflow</Link>
      <div className="w-[500px] border border-gray-400">
        {workflows &&
          workflows.length > 0 &&
          workflows.map((i: any) => {
            return (
              <div
                key={i.id}
                className="mb-4 cursor-pointer hover:bg-blue-500"
                onClick={() => {
                  push(`/workflow/${i.id}`);
                }}
              >
                {i.id}
              </div>
            );
          })}
      </div>
    </main>
  );
}
