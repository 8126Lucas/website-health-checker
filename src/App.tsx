import './App.css'
import {healthCheck} from "../scripts/healthCheck.ts";
import {useEffect, useRef, useState} from "react";

function App() {
    const hasMounted = useRef(false);
    const [status, setStatus] = useState("Checking...");
    const [url, setUrl] = useState("https://www.");
    const [tick, setTick] = useState<number>(0);
    const [status_visible, setStatusVisible] = useState<boolean>(false);
    const [is_animating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        async function fetchStatus() {
            if(url !== "" && hasMounted.current) {
                try {
                    const result = await healthCheck(url);
                    setStatus(result);
                    setStatusVisible(true);
                    setIsAnimating(true);
                } catch (error) {
                    setStatus("Failed to check status.");
                    setStatusVisible(true);
                    setIsAnimating(true);
                }
            }
        }

        fetchStatus();
        hasMounted.current = true;
    }, [tick]);

    const handleSearchClick = () => {
        setTick(tick + 1);
        setStatusVisible(false);
        setIsAnimating(false);
    };

    return (
        <>
            <section id="center">
                <p className="title">Website Health Checker (by Lucas)</p>

                <div className="container">
                    <div className="search-container">
                        <input className="input" type="text" value={url} onChange={event => setUrl(event.target.value)}/>
                        <svg viewBox="0 0 24 24" className="search__icon" onClick={handleSearchClick}>
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className="terminal-loader">
                    <div className="terminal-header">
                        <div className="terminal-title">Status</div>
                        <div className="terminal-controls">
                            <div className="control close"></div>
                            <div className="control minimize"></div>
                            <div className="control maximize"></div>
                        </div>
                    </div>
                    <div
                        className={`text ${is_animating ? 'animate' : ''}`}
                        style={{
                            animation: is_animating
                                ? 'type 4s steps(20) forwards, blinkCursor 0.5s step-end infinite'
                                : 'none'
                        }}
                    >
                        {status_visible ? status : "Waiting..."}
                    </div>
                </div>
            </section>
        </>
    );
}

export default App
