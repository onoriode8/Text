import classes from '../Account.module.css';

const details = () => (
    <header style={{padding: "40px 0px"}}>
        <div className={classes.nameContainer}>
        <div style={{background: 'red'}}>
        <h2 style={{padding: "10px", color: "#fff", margin: "0px 10px", fontSize: "1.5em"}}>Bank of America</h2>
        </div>
        <div className={classes.nameContainer}>
           <div className={classes.preferred}>Personal Checking -1234</div>
           <div style={{fontFamily: "fantasy"}}>$5,300,000</div>
            <div className={classes.endContainer}>
                <div></div>
                <div className={classes.end}>View</div>
            </div>
                <hr/>
            <div className={classes.preferred}>Family Checking -5679</div>
              <div style={{fontFamily: "fantasy"}}>$5,000,000</div>
              <div className={classes.endContainer}>
                <div></div>
                <div className={classes.end}>View</div>
              </div>
              <hr />
              <p style={{textAlign: "center", color: "blue", fontSize: "0.8em"}}>OPEN NEW ACCOUNT</p>
        </div>
        </div>
    </header>
);

export default details;