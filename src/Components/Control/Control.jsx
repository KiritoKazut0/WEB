import React from 'react';
import { blue, green, grey, yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import './Control.css';
import { useHomeContext } from '../../Context/HomeContext';

export default function Controls() {
    const { updateDeviceStatus } = useHomeContext();

    const handleDeviceClick = (device) => {
        updateDeviceStatus(device);
    };

    return (
        <div className='control'>
            <Stack direction="column" spacing={3}>
                <button onClick={() => handleDeviceClick('door')}>
                    <Avatar sx={{ bgcolor: green[500] }}>
                        <SensorDoorOutlinedIcon />
                    </Avatar>
                    Puerta
                </button>
                <button onClick={() => handleDeviceClick('light')}>
                    <Avatar sx={{ bgcolor: yellow[700] }}>
                        <LightbulbOutlinedIcon />
                    </Avatar>
                    Foco
                </button>
                <button onClick={() => handleDeviceClick('air_conditioner')}>
                    <Avatar sx={{ bgcolor: blue[500] }}>
                        <AcUnitOutlinedIcon />
                    </Avatar>
                    Clima
                </button>
                <button onClick={() => handleDeviceClick('gate')}>
                    <Avatar sx={{ bgcolor: grey[500] }}>
                        <FenceOutlinedIcon />
                    </Avatar>
                    Porton
                </button>
            </Stack>
        </div>
    );
}

