import { useState } from "react";
import './BillingSection.css';
import userIcon from '../../assets/icons/user.svg';
const tipOptions = [5, 10, 15, 25, 50];

const BillingSection = () => {
    const [selectedOption, setSelectedOption] = useState(-1);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [history, setHistory] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const bill = parseInt(data.get('bill-input'));
        const numberOfPeople = parseInt(data.get('number-of-people-input'));

        console.log(bill, numberOfPeople, selectedOption);

        const tipTotal = bill * (tipOptions[selectedOption] / 100);
        const tipTotalPerPerson = (tipTotal / numberOfPeople).toFixed(2);

        const orderTotal = bill + tipTotal;
        const orderTotalPerPerson = orderTotal / numberOfPeople;
        const newHistory = [...history, { bill, tipTotal, numberOfPeople }];
        setHistory(newHistory);
        console.log(newHistory);
        setTipAmount(tipTotalPerPerson);
        setTotalAmount(orderTotalPerPerson);

           e.target.reset();
          setSelectedOption(-1);
          setTipAmount(0);
          setTotalAmount(0);
    };

    const handleClick = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const calculateAverage = (history, property) => {
        let sum = 0;
    
        for (let i = 0; i < history.length; i++) {
            sum += history[i][property];
        }
    
        return parseFloat(sum / history.length);
    }
    
    const averageBillAmount = calculateAverage(history, 'bill').toFixed(2);
    const averageTipsAmount = calculateAverage(history, 'tipTotal').toFixed(2);
    const averagePersonsAmount = calculateAverage(history, 'numberOfPeople').toFixed(0);
    

    return (
        <section>
            <h1 className="billing-section-title"> SPLI TTER </h1>
            <div className="billing-container">
                <form onSubmit={handleSubmit} className="billing-form">
                    <div className="input-container">
                        <label className="standard-label" htmlFor="bill-input"> Bill </label>
                        <input className="standard-input" id="bill-input" name="bill-input" type="number" defaultValue={0} />
                        <p className="standard-input-indicator"> $ </p>
                    </div>
                    <div className="tip-options-container">
                        <p className="standard-label"> Select Tip % </p>
                        <div className="tip-options">
                            {tipOptions.map((option, index) => (
                                <button type="button" className={index === selectedOption ? 'selected' : ''} onClick={() => handleClick(index)} key={option}> {option}% </button>
                            ))}
                        </div>
                    </div>
                    <div className="input-container">
                        <label className="standard-label" htmlFor="number-of-people-input"> Number of People </label>
                        <input className="standard-input" id="number-of-people-input" name="number-of-people-input" type="number" defaultValue={0} />
                        <img className="standard-input-indicator" src={userIcon} />
                    </div>
                    <button type="submit" className="calculate-billing"> Calculate </button>
                </form>
                <div className="billing-result-container">
                    <div className="billing-result">
                        <div>
                            <p className="billing-result-heading"> Tip Amount </p>
                            <p className="billing-result-sub-heading"> /person </p>
                        </div>
                        <p className="billing-result-number"> ${tipAmount} </p>
                    </div>
                    <div className="billing-result">
                        <div>
                            <p className="billing-result-heading"> Total </p>
                            <p className="billing-result-sub-heading"> /person </p>
                        </div>
                        <p className="billing-result-number"> ${totalAmount} </p>
                    </div>
                </div>
            </div>

          <div className="under-section">
          {history.length > 0 && (
        <div>
            
            <div className="under-section av-amount historyList">
            <h6 className="historyList">Av. Bills: ${averageBillAmount}</h6>
            <h6 className="historyList">Av. Tips: ${averageTipsAmount}</h6>
            <h6 className="historyList">Av. Persons: {averagePersonsAmount}</h6>
            </div>
        </div>
    )} 

    {history.length > 0 && (

     <ul className="historyList">
  {history.map((order,index) => (
    <li key={index}> Bill: ${order.bill} | Tip: ${order.tipTotal} | People: {order.numberOfPeople} </li>
  ))}
</ul>
    )}


            </div>
        </section>
    )
}

export default BillingSection;