import '../Room/Room.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WbIncandescentRoundedIcon from '@mui/icons-material/WbIncandescentRounded';
import { useHomeContext } from '../../Context/HomeContext'; // Importa el contexto
import React, { useEffect } from 'react'; // Importa useEffect para actualizar los estados desde el contexto

export default function Room() {
    const { light, airConditioner } = useHomeContext(); // Usa el contexto para obtener los estados y funciones

    useEffect(() => {
        // Opcional: Puedes actualizar los estados al montar el componente si es necesario
        // Por ejemplo:
        // setLightOn(light === 1);
        // setOnClimate(airConditioner === 1);
    }, [light, airConditioner]);

    return (
        <div className="Container-room">
            <img
                src="https://i.imgur.com/burXa4y.jpg"
                alt="Habitación"
                className='habitacion'
            />
            
            {light === 1 ? 
                <WbIncandescentRoundedIcon sx={{fontSize: "35px"}} className='focoOn'/>
                :
                <LightbulbIcon sx={{ fontSize: "35px" }} className='foco' /> }

            {airConditioner === 1 ? (
                <img
                    src="https://i.imgur.com/gOF3PVh.png"
                    className='aire'
                    alt="aire"
                />
            ) : (
                <img
                    src="https://i.imgur.com/di5GZdr.png"
                    className='On'
                    alt="aireAcondicionado"
                />
            )}

        </div>
    );
}
