import classes from './Account.module.css';
import Details from './Details/Details';
import { BiMenu } from 'react-icons/bi';
import manImage from '../../assests/IMG-20221111-WA0000.jpg';

const Account = () => {
    return (
        <header>
            <div><BiMenu style={{color: '#426397', fontSize: '2.2em'}}/></div>
            <div>
                <div>
                    <div>
                       <h1 className={classes.name}><strong>Hi, Jonathan</strong></h1>
                       <div className={classes.endContainer}>
                        {/* <div> */}
                            <div></div>
                            <img src={manImage} alt='' style={{marginTop: "-70px", width: "20%", borderRadius: '2em'}}/>
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
                       <p style={{color: '#fff', margin: '10px 15px', fontSize: '1.3em'}}><strong>City Gold 001</strong></p>
                       <div style={{margin: '5px 15px'}}>x6320</div>
                       <div className={classes.endContainer}>
                            <div></div>
                            <div className={classes.end}>
                                <div style={{color: '#fff', fontSize: '1.5em'}}><strong>$5,300,200.33</strong></div>
                                <div style={{color: '#fff'}}><strong>Available</strong></div>
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