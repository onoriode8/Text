import { BiPhone } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { TiMessages } from 'react-icons/ti';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const contact = () => (
    <header>
        <div style={{
            border: '1px solid #fff',
            boxShadow: '1px 2px 3px 0px #1134',
            borderRadius: '5px'
        }}>
           <div style={{textAlign: 'center'}}>
              City national bank Logo
           </div>

           <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 20px'}}><TfiLocationPin /></div>
                    <div><strong>Locations</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 9px'}}><BiPhone /></div>
                    <div><strong>Call</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 18px'}}><TiMessages /></div>
                    <div><strong>Message</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 7px'}}><AiOutlineInfoCircle /></div>
                    <div><strong>Info</strong></div>
                </div>
           </div>
        </div>
    </header>
);

export default contact;