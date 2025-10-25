import { useEffect, useRef, useState } from "react"

function AnimatedCounter ({targetNumber, duration = 2000}) {
    const [count, setCount] = useState(0);
    const startTimeRef = useRef(null);

    useEffect(() => {
        const start = performance.now();

        const animate = (time) => {
            if(!startTimeRef.current) startTimeRef.current = start;
            const elapsed = time - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = progress;
            const currentCount = Math.floor(easedProgress * targetNumber);
            setCount(currentCount);

            if(progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(targetNumber)
            }
        };

        requestAnimationFrame(animate);

        return() => {
            startTimeRef.current = null;
        };
    }, [targetNumber, duration]);
    return <h1>{count}+</h1>
}

export default function  Counter() {
    return(
        <div>
            <AnimatedCounter targetNumber={191} duration={3000} />
        </div>
    )
}