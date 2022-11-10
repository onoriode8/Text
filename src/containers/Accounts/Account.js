import classes from './Account.module.css';
import Details from './Details/Details';

const Account = () => {
    return (
        <header>
            <div>
                <div className={classes.nameContainer}>
                    <div>
                       <h1 className={classes.name}>Hello, Robert Mercado</h1>
                       <div className={classes.preferred}>Preferred Rewards Member</div>
                       <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}>end icon</div>
                       </div>
                    </div>

                   <div>
                       <p><strong>My Rewards</strong></p>
                       <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}>end icon</div>
                       </div>
                </div>
              </div>
            </div>
            <Details />
        </header>
    );
};

export default Account;