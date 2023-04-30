function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const temperatureValue = temperatureInput.value;
    const unitInputs = document.getElementsByName('unit');
    let fromUnit;
    let toUnit;
  
    for (let i = 0; i < unitInputs.length; i++) {
      if (unitInputs[i].checked) {
        fromUnit = unitInputs[i].value;
        toUnit = fromUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
        break;
      }
    }
  
    const convertedValue = fromUnit === 'Celsius' ? (temperatureValue * 9 / 5) + 32 : (temperatureValue - 32) * 5 / 9;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${temperatureValue} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}.`;
  }
  