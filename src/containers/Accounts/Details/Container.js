

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
        <div style={{display: 'flex', margin: '30px 0px'}}>
            <div style={style}>
                <div>Icon</div>
                <div>Transfer</div>
            </div>

            <div style={style}>
                <div>Icon</div>
                <div>Deposit</div>
            </div>

            <div style={style}>
                <div>Icon</div>
                <div>Pay</div>
            </div>

            <div style={style}>
                <div>Icon</div>
                <div>Message</div>
            </div>

            <div style={style}>
                <div>Icon</div>
                <div>send</div>
            </div>
        </div>
    </header>
);

};

export default container;