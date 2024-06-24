import './Home.css'
import Room from '../../Components/Room/Room';
import Bathroom from '../../Components/bathroom/bathroom';
import Gate from '../../Components/Gate/Gate';
import Door from '../../Components/Door/Door';
import Controls from '../../Components/Control/Control';

export default function Home() {
    return (
        <div className='main'>
            <div className="Container-home">
                <Bathroom />
                <Room />
                <Gate />
                <Door />
            </div>
            <Controls/>
        </div>
    );
}