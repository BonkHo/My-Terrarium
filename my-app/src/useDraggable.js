import { useState, useEffect } from "react";

export default function useDraggable(el) {
    const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });

    useEffect(() => {
        const handleMouseDown = (event) => {
            let startX = event.pageX - dx;
            let startY = event.pageY - dy;
            let d = { x: startX, y: startY };

            const handleMouseMove = (event) => {
                d.x = event.pageX - startX;
                d.y = event.pageY - startY;
                console.log(d);
                setOffset({ dx: d.x, dy: d.y });
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", handleMouseMove);
            });
        };
        console.log("CREATED");
        el.current.addEventListener("mousedown", handleMouseDown);
        let cleanUp = el.current;
        return () => {
            cleanUp.removeEventListener("mousedown", handleMouseDown);
        };
    });

    useEffect(() => {
        el.current.style.transform = `translate(${dx}px, ${dy}px)`;
    });
}
