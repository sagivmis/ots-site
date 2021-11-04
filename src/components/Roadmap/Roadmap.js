import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Roadmap.css";

const Roadmap = ({ scrolled, windowY = 0 }) => {
    const [scrolledClass, setScrolled] = useState("roadmap-item");
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [x2, setX2] = useState();
    const [y2, setY2] = useState();

    const ref = useRef();
    const ref2 = useRef();

    const line = (
        <svg width='2500' height='500'>
            <line x1={x} y1={y} x2={x2} y2={y2} stroke='white' />
        </svg>
    );

    useEffect(() => {
        if (scrolled) setScrolled("roadmap-item scrolled-road");
        else setScrolled("roadmap-item");
        return () => {};
    }, [scrolled]);

    useEffect(() => {});

    const handlePositionChange = useCallback(() => {
        let shape = ref.current.getBoundingClientRect();
        let shape2 = ref2.current.getBoundingClientRect();
        let xCalc = (shape.right + shape.left) / 2;
        let yCalc = (shape.top + shape.bottm) / 2;
        let xCalc2 = (shape2.right + shape2.left) / 2;
        let yCalc2 = (shape2.top + shape2.bottm) / 2;

        setX(shape.right + shape.width / 2);
        setY(shape.bottm + shape.height / 2);
        setX2(shape2.right + shape2.width / 2);
        setY2(shape2.bottm + shape2.height / 2);
    }, [x, y, windowY]);

    useEffect(() => {
        handlePositionChange();
    }, [handlePositionChange]);
    return (
        <div className='roadmap'>
            <div className='roadmap-grid'>
                {line}
                <div className={scrolledClass + " done"} ref={ref}>
                    <h1 className='aura'>Q1</h1>
                </div>
                <div className={scrolledClass} ref={ref2}>
                    <h1 className='aura'>Q2</h1>
                </div>
                <div className={scrolledClass}>
                    <h1 className='aura'>Q3</h1>
                </div>
                <div className={scrolledClass}>
                    <h1 className='aura'>Q4</h1>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
