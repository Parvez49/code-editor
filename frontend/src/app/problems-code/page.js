"use client"

import React from "react";
import ResizableLayout from "@/components/Layout/ResizableLayout";
import ProblemDescription from "@/components/Problem/ProblemDescription";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import TestCases from "@/components/TestCases/TestCases";
import { ProblemProvider } from "@/contexts/ProblemContext";

// Simulated data for testing
const problemData = {
    title: "1400. Construct K Palindrome Strings",
    description:
        "Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.",
    testCases:[
        {
            input:"problem testcase input",
            output:'problem testcase output'
        }
    ]   
}; 

export default function ProblemPage(){
    return (
        <ProblemProvider problemData={problemData}>
            <ResizableLayout
                panels={[
                    { component: <ProblemDescription />, minSize: 200 },
                    { component: <CodeEditor />, minSize: 300 },
                    { component: <TestCases />, minSize: 200 },
                ]}
            />
        </ProblemProvider>
    );
}
