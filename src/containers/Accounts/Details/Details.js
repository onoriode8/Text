import Container from './Container';
import Contacts from './Contacts';
import Transaction from './Transaction';
import { BsChevronRight } from 'react-icons/bs';

const details = () => (
    <header style={{padding: "40px 0px"}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
           <input type='radio' name='first' />
           <input type='radio' name='second' />
           <input type='radio' name='third' />
           <div style={{margin: '0px 10px', color: '#426397'}}><BsChevronRight /></div>
        </div>
        <div>
            <Container />
        </div>
        <div>
            <Contacts />
        </div>

        <div>
            <Transaction />
        </div>
    </header>
);

export default details;