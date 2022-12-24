
function CalculatorApp() {
    return (
        <section className='calculator'>
            <h1>My Calculator App</h1>
            <div className="calculator-container">
            <div className='screen-container'>
                <input type="text" className='screen' placeholder='0'></input>
            </div>
            <div className='button-container'>
                <div className='button-row'>
                    <button>Clear</button>
                    <button>Del</button>
                    <button>%</button>
                    <button className="button-bg">/</button>
                </div>
                <div className='button-row'>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="button-bg">*</button>
                </div>
                <div className='button-row'>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className="button-bg">-</button>
                </div>
                <div className='button-row'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="button-bg">+</button>
                </div>
                <div className='button-row'>
                    <button>0</button>
                    <button>.</button>
                    <button className="equal">=</button>
                </div>
            </div>
        </div>
        </section>
    );
}
export default CalculatorApp;