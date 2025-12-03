import { useCallback, useState } from "react";

export default function Toggle() {
    const [status, setStatus] = useState(true);
    const handleToggle = useCallback(() => {
        setTimeout(() => {
            setStatus(prev => !prev);
        }, 2000);
    }, [setStatus]);
    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            <span>{status ? 'On' : 'Off'}</span>
        </div>
    )
}