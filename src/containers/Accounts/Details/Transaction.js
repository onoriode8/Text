import { AiOutlineSearch } from 'react-icons/ai';

const transaction = () => (
    <header>
        <div style={{
            border: '1px solid #fff',
            boxShadow: '1px 2px 3px 3px #1134',
            borderRadius: '5px',
            margin: '20px 0px'
        }}>
        <div style={{margin: '15px 0px'}}><strong>Transactions</strong></div>
        <div style={{display: 'flex', justifyContent: "flex-end", marginTop: '-34px'}}>
            <div></div>
            <div style={{margin: '0px 2em'}}><AiOutlineSearch /></div>
            <div><strong>...</strong></div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", margin: '18px 0px'}}>
          <div><strong>TRANSF TO SAVINGS CONFIRMATIO...</strong></div>
          <div>$5,000.00</div>
        </div>
        <hr />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div><strong>TRSF FROM CHECKING ACCOUNT 1...</strong></div>
          <div style={{color: 'green'}}>+$5,000.00</div>
        </div>
        </div>
    </header>
);


export default transaction;