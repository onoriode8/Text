import { BiTransferAlt } from 'react-icons/bi';
import { TbFileDollar } from 'react-icons/tb';
import { TiMessages } from 'react-icons/ti';
import { RiSendPlaneLine } from 'react-icons/ri';
import { BsDownload } from 'react-icons/bs';

const container = () => {

    const style={
        border: '1px solid #426397',
        background: "#426397",
        color: "#fff",
        width: "4.5em",
        boxSizing: 'border-box',
        borderRadius: "7px",
        margin: '0px 3px', 
        padding: '10px 12px'
    }
    return (
    <header>
        <div style={{display: 'flex', margin: '30px 0px'}}>
            <div style={style}>
                <div style={{margin: '0px 12px'}}><BiTransferAlt style={{fontSize: '1.3em'}}/></div>
                <div style={{margin: '0px 0.5px'}}>Transfer</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 12px'}}><BsDownload  style={{fontSize: '1.3em'}}/></div>
                <div>Deposit</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 12px'}}><TbFileDollar style={{fontSize: '1.5em'}}/></div>
                <div style={{margin: '0px 12px'}}>Pay</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 12px'}}><TiMessages style={{fontSize: '1.5em'}}/></div>
                <div>Message</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 12px'}}><RiSendPlaneLine style={{fontSize: '1.5em'}}/></div>
                <div style={{margin: '0px 8px'}}>send</div>
            </div>
        </div>
    </header>
);

};

export default container;