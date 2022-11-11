import { BiPhone } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { TiMessages } from 'react-icons/ti';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import cityLogo from '../../../assests/CNB_logo.jpeg';

const contact = () => (
    <header>
        <div style={{
            border: '1px solid #fff',
            boxShadow: '1px 2px 3px 0px #1134',
            borderRadius: '5px'
        }}>
           <div style={{textAlign: 'center'}}>
              <img src={cityLogo} alt='' style={{width: '40%'}}/>
           </div>

           <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 20px', color: '#426397', fontSize: '1.5em'}}><TfiLocationPin /></div>
                    <div><strong>Locations</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 9px', color: '#426397', fontSize: '1.5em'}}><BiPhone /></div>
                    <div><strong>Call</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 18px', color: '#426397', fontSize: '1.5em'}}><TiMessages /></div>
                    <div><strong>Message</strong></div>
                </div>

                <div style={{margin: '0px 15px'}}>
                    <div style={{margin: '0px 7px', color: '#426397', fontSize: '1.5em'}}><AiOutlineInfoCircle /></div>
                    <div><strong>Info</strong></div>
                </div>
           </div>
        </div>
    </header>
);

export default contact;