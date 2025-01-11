"use client";

import React, { useState, useRef } from "react";
import styles from "@/styles/resizable.module.css";

export default function ResizableLayout({ panels }) {
    const [sizes, setSizes] = useState(
        Array(panels.length).fill(1 / panels.length) // Equal division initially
    );

    const containerRef = useRef(null);

    const handleMouseDown = (event, index) => {
        event.preventDefault();
        const startX = event.clientX;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const containerWidth = containerRef.current.offsetWidth;

            const delta = deltaX / containerWidth;
            const newSizes = [...sizes];
            newSizes[index] += delta;
            newSizes[index + 1] -= delta;

            if (newSizes[index] >= 0.1 && newSizes[index + 1] >= 0.1) {
                setSizes(newSizes);
            }
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className={styles.container} ref={containerRef}>
            {panels.map((panel, index) => (
                <React.Fragment key={index}>
                    <div
                        className={styles.panel}
                        style={{ flex: sizes[index] }}
                    >
                        {panel.component}
                    </div>
                    {index < panels.length - 1 && (
                        <div
                            className={styles.resizer}
                            onMouseDown={(e) => handleMouseDown(e, index)}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
