import React, { useEffect } from "react";
import { useHomeContext } from '../../Context/HomeContext';
import './Door.css';

export default function Door() {
    const { door, updateDeviceStatus } = useHomeContext();

    useEffect(() => {
        updateDeviceStatus('door');
    }, []);

    const src = door === 1 ? "https://i.imgur.com/Jl8yHs6.png" : "https://i.imgur.com/rUPhFXq.png";

    return (
        <div className="container-Door">
            <img src={src}
                 alt="Puerta"
                 className="Puerta" />
        </div>
    );
}
