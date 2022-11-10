import classes from './Account.module.css';
import Details from './Details/Details';

const Account = () => {
    return (
        <header>
            <div>
                <div>
                    <div>
                       <h1 className={classes.name}>Hi, Robert Mercado</h1>
                       <div className={classes.endContainer}>
                        {/* <div> */}
                            <div></div>
                            <img src="" alt='' />
                        {/* </div> */}
                       </div>
                       <div className={classes.preferred}>Accounts</div>
                       <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}><strong>...</strong></div>
                       </div>
                       {/* <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}>end icon</div>
                       </div> */}
                    </div>

                   <div className={classes.nameContainer}>
                       <p style={{color: '#fff', margin: '10px 15px'}}><strong>City Gold 001</strong></p>
                       <div style={{margin: '5px 15px'}}>x6320</div>
                       <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}>
                                <div style={{color: '#fff'}}>$5,300,000.59</div>
                                <div style={{color: '#fff'}}>Available</div>
                            </div>
                       </div>
                </div>
              </div>
            </div>
            <Details />
        </header>
    );
};

export default Account;