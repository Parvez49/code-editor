"use client"

import React from "react";

export default function CodeEditor() {
    return (
        <textarea
            style={{
                width: "100%",
                height: "100%",
                fontFamily: "monospace",
                fontSize: "14px",
            }}
            placeholder="Write your code here..."
        />
    );
}
