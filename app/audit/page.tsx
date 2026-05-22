"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Audit() {
    const router = useRouter();

    const [tool, setTool] = useState("ChatGPT");
    const [spend, setSpend] = useState(0);
    const [seats, setSeats] = useState(1);

    function submit() {
        const id = Math.random().toString(36).slice(2);

        localStorage.setItem(id, JSON.stringify({ tool, spend, seats }));

        router.push("/result/" + id);
    }

    return (
        <div className="min-h-screen bg-black text-white px-6">
            <div className="min-h-screen bg-black flex items-center justify-center px-6">

                <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">

                    <h1 className="text-2xl font-semibold mb-6">
                        AI Spend Audit
                    </h1>

                    <select
                        className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
                        onChange={(e) => setTool(e.target.value)}
                    >
                        <option>ChatGPT</option>
                        <option>Cursor</option>
                        <option>Copilot</option>
                    </select>

                    <input
                        className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
                        placeholder="Monthly Spend (₹)"
                        onChange={(e) => setSpend(Number(e.target.value))}
                    />

                    <input
                        className="w-full p-3 mb-6 bg-black border border-zinc-700 rounded-lg"
                        placeholder="Number of Seats"
                        onChange={(e) => setSeats(Number(e.target.value))}
                    />

                    <button
                        onClick={submit}
                        className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    );
}