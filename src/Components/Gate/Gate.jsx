import React, { useEffect } from "react";
import { useHomeContext } from '../../Context/HomeContext';
import './Gate.css';

export default function Gate() {
    const { gate, updateDeviceStatus } = useHomeContext();

    useEffect(() => {
        updateDeviceStatus('gate');
    }, []);

    const src = gate === 1 ? "https://i.imgur.com/dRD8o6P.png" : "https://i.imgur.com/mTG3Zvf.png";

    return (
        <img
            src={src}
            alt="porton"
            className="porton"
        />
    );
}
