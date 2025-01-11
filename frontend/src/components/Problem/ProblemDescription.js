"use client"
import React from "react";
import { useProblem } from "@/contexts/ProblemContext";

export default function ProblemDescription() {
    const { problem } = useProblem();

    return (
        <div>
            <h1>{problem.title}</h1>
            <p>{problem.description}</p>
        </div>
    );
}
