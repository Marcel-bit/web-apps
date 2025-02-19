

function getInputData(){
    const inputAmount = document.getElementById('amount').value; 
    const inputRecurring = document.getElementById('recurring').value; 
    const inputTime = document.getElementById('time').value; 
    const inputCAGR = document.getElementById('CAGR').value; 
    
    // console.log(inputAmount, inputRecurring, inputTime, inputCAGR);
    return {inputAmount, inputRecurring, inputTime, inputCAGR};
}

async function renderResult(result) {
    resultBox = document.getElementById('result')
    resultBox.innerHTML = result
}
export async function apiCallCalculate(data){
    try{
        // fetch returns a promise
        const response = await fetch('http://127.0.0.1:5000/calculateAmount', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ 
                'inputAmount': data.inputAmount,
                'inputRecurring': data.inputRecurring,
                'inputTime' : data.inputTime,
                'inputCAGR': data.inputCAGR                  
                })

        });

        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        // console.log(json);
        return json
        }
    catch(error){
        console.error(error);
    }
}

function calculate(){
    let data = getInputData();
    apiCallCalculate(data);
    // console.log(data, data.inputAmount);

}

