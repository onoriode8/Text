import { BiTransferAlt } from 'react-icons/bi';
import { TbFileDollar } from 'react-icons/tb';
import { TiMessages } from 'react-icons/ti';
import { RiSendPlaneLine } from 'react-icons/ri';
import { BsDownload } from 'react-icons/bs';

const container = () => {

    const style={
        border: '1px solid darkblue',
        background: "darkblue",
        color: "#fff",
        width: "3.5em",
        boxSizing: 'border-box',
        borderRadius: "7px",
        margin: '0px 3px'
    }
    return (
    <header>
        <div style={{display: 'flex', margin: '30px 30px'}}>
            <div style={style}>
                <div style={{margin: '0px 18px'}}><BiTransferAlt /></div>
                <div>Transfer</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 18px'}}><BsDownload /></div>
                <div>Deposit</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 18px'}}><TbFileDollar /></div>
                <div style={{margin: '0px 15px'}}>Pay</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 18px'}}><TiMessages /></div>
                <div>Message</div>
            </div>

            <div style={style}>
                <div style={{margin: '0px 18px'}}><RiSendPlaneLine /></div>
                <div style={{margin: '0px 12px'}}>send</div>
            </div>
        </div>
    </header>
);

};

export default container;