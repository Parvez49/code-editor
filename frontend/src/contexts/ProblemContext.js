"use client"

import React, { createContext, useContext, useState } from "react";

const ProblemContext = createContext();

export const useProblem = () => useContext(ProblemContext);

export const ProblemProvider = ({ children, problemData }) => {
    const [problem, setProblem] = useState(problemData);

    return (
        <ProblemContext.Provider value={{ problem, setProblem }}>
            {children}
        </ProblemContext.Provider>
    );
};
