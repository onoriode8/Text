import Container from './Container';
import Contacts from './Contacts';
import { BsChevronRight } from 'react-icons/bs';

const details = () => (
    <header style={{padding: "40px 0px"}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
           <input type='radio' />
           <input type='radio' />
           <input type='radio' />
           <div style={{margin: '0px 10px'}}><BsChevronRight /></div>
        </div>
        <div>
            <Container />
        </div>
        <div>
            <Contacts />
        </div>
    </header>
);

export default details;