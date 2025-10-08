import React from "react";
import { ProgressBar } from "react-bootstrap";


interface ProgressProps {
    now: number; 
    label?: string; 
}

const Progressbar: React.FC<ProgressProps> = ({ now, label }) => {
    return (
        <div className="progressbar-main">
            <div className="progressbar-title">
                <span className="text-small">{label}</span>
                <span className="text-small">{now}%</span>
            </div>
            <ProgressBar now={now} />
        </div>
    )
}

export default Progressbar