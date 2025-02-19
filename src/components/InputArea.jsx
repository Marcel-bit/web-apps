import { apiCallCalculate } from "../modules";



export default function InputArea() {

    // const [compound, setCompound] = useState({});
    let data = {'inputAmount': '5', 'inputRecurring': '5', 'inputTime': '5', 'inputCAGR': '5'};

    function getData() {
        let inputAmount = document.getElementById('amount').value
        let inputRecurring = document.getElementById('recurring').value
        let inputTime = document.getElementById('time').value
        let inputCAGR = document.getElementById('CAGR').value
        let data = {'inputAmount': inputAmount, 'inputRecurring': inputRecurring, 'inputTime': inputTime, 'inputCAGR': inputCAGR}
        return data
    }

    async function calculate() {
        const result = document.getElementById('result')
        
        let data = getData(); 
        let display = await apiCallCalculate(data);

        console.log(display.compounded)

        result.innerHTML = display.compounded
        
        
        
    }

    return (
        <>
            <input type="text" id="amount" /><br />
            <input type="text" id="recurring" /><br />
            <input type="text" id="time" /><br />
            <input type="text" id="CAGR" /><br />
            <button onClick={calculate}>Calculate it!</button>
            <p id="result">result</p>
        </>
    )
}