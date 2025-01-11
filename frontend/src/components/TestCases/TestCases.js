"use client"

import React from "react";
import { useProblem } from "@/contexts/ProblemContext";

export default function TestCases() {
    const { problem } = useProblem();

    return (
        <div>
            <h2>Test Cases</h2>
            <ul>
                {problem.testCases.map((testCase, index) => (
                    <li key={index}>
                        Input: {testCase.input} - Output: {testCase.output}
                    </li>
                ))}
            </ul>
        </div>
    );
}
