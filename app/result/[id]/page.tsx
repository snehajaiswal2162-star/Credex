"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAudit } from "@/lib/audit";

export default function Result() {
    const params = useParams();
    const id = params?.id as string;

    const [data, setData] = useState<any>(null);
    const [original, setOriginal] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Load saved data from localStorage
    useEffect(() => {
        if (!id) return;

        const stored = localStorage.getItem(id);

        if (stored) {
            const parsed = JSON.parse(stored);

            setOriginal(parsed);
            setData(getAudit(parsed));
        }

        setLoading(false);
    }, [id]);

    // OPTIMIZE BUTTON LOGIC
    const handleOptimize = () => {
        if (!original) return;

        // Simulated optimization (you can improve later with AI/API)
        const optimizedInput = {
            ...original,
            spend: Math.floor(original.spend * 0.8), // reduce 20%
        };

        const optimizedResult = getAudit(optimizedInput);
        setData(optimizedResult);
    };

    if (loading || !data) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-3xl mx-auto">

                {/* TITLE */}
                <h1 className="text-3xl font-bold mb-8">
                    Your Credex Report
                </h1>

                {/* MAIN CARD */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

                    <p className="text-gray-400">Estimated Savings</p>

                    <h2 className="text-5xl font-bold text-green-400 mt-2">
                        ₹{data.savingsMonthly}/mo
                    </h2>

                    <p className="text-gray-400 mt-1">
                        ₹{data.savingsYearly}/year
                    </p>

                    {/* OPTIMIZE BUTTON */}
                    <button
                        onClick={handleOptimize}
                        className="mt-6 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                        Optimize Plan
                    </button>
                </div>

                {/* SUGGESTIONS */}
                <div className="mt-8 space-y-4">
                    {data.suggestions?.map((s: string, i: number) => (
                        <div
                            key={i}
                            className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:scale-[1.02] transition"
                        >
                            {s}
                        </div>
                    ))}
                </div>

                {/* FOOTER NOTE (optional but good for internship feel) */}
                <p className="text-gray-500 text-sm mt-10 text-center">
                    Credex analyzes your subscriptions and finds optimization opportunities.
                </p>

            </div>
        </div>
    );
}