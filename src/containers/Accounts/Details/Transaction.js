import { AiOutlineSearch } from 'react-icons/ai';

const transaction = () => (
    <header>
        <div style={{
            border: '1px solid #fff',
            boxShadow: '1px 2px 3px 3px #1134',
            borderRadius: '5px',
            margin: '20px 0px'
        }}>
        <div style={{margin: '15px 15px', fontSize: '1em'}}><strong>Transactions</strong></div>
        <div style={{display: 'flex', justifyContent: "flex-end", marginTop: '-34px'}}>
            <div></div>
            <div style={{margin: '0px 2em'}}><AiOutlineSearch /></div>
            <div><strong>...</strong></div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", margin: '20px 15px'}}>
          <div style={{fontSize: '13px'}}>TRANSF FROM (BP) COMPANY...</div>
          <div style={{color: 'green', fontSize: '1em'}}>+$1,000,000.00</div>
        </div>
        <hr />
        <div style={{display: "flex", justifyContent: "space-between",margin: '20px 15px'}}>
          <div style={{fontSize: '13px'}}>TRANSF TO KELLY TOM...</div>
          <div style={{color: 'green', fontSize: '1em'}}>$500.00</div>
        </div>
        <hr />
        <div style={{display: "flex", justifyContent: "space-between", margin: '18px 15px'}}>
          <div style={{fontSize: '13px'}}>TRANSF TO SAVINGS CONFIRMATIO...</div>
          <div style={{fontSize: '1em'}}>$5,000.00</div>
        </div>
        <hr />
        <div style={{display: "flex", justifyContent: "space-between", margin: '20px 15px'}}>
          <div style={{fontSize: '13px'}}>TRSF FROM CHECKING ACCOUNT 1...</div>
          <div style={{color: 'green', fontSize: '1em'}}>+$5,000.00</div>
        </div>
        </div>
    </header>
);


export default transaction;