function getNumbers() {

  let input = document.getElementById("numbers").value;

  let nums = input
    .split(",")
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

  return nums;
}

function mean(nums) {

  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function meanDeviation(nums, meanVal) {

  let total = nums.reduce((sum, num) => {

    return sum + Math.abs(num - meanVal);

  }, 0);

  return total / nums.length;
}

function variance(nums, meanVal) {

  let total = nums.reduce((sum, num) => {

    return sum + Math.pow(num - meanVal, 2);

  }, 0);

  return total / nums.length;
}

function standardDeviation(varianceVal) {

  return Math.sqrt(varianceVal);
}

function solveAll() {

  let nums = getNumbers();

  if(nums.length === 0){

    alert("Please enter valid numbers.");

    return;
  }

  let meanVal = mean(nums);

  let md = meanDeviation(nums, meanVal);

  let varVal = variance(nums, meanVal);

  let sd = standardDeviation(varVal);

  document.getElementById("result").innerHTML = `

    <div>
      📌 Numbers:
      <span>${nums.join(", ")}</span>
    </div>

    <div>
      📈 Mean:
      <span>${meanVal.toFixed(4)}</span>
    </div>

    <div>
      📉 Mean Deviation:
      <span>${md.toFixed(4)}</span>
    </div>

    <div>
      📊 Variance:
      <span>${varVal.toFixed(4)}</span>
    </div>

    <div>
      📐 Standard Deviation:
      <span>${sd.toFixed(4)}</span>
    </div>

  `;
}

function clearData(){

  document.getElementById("numbers").value = "";

  document.getElementById("result").innerHTML =
    "Results will appear here...";
}