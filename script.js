function calculateBMI() {
    var weight = document.getElementById('currentWeight').value;
    var height = document.getElementById('height').value;
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    document.getElementById('bmiResult').innerText = bmi;
    displayResults();
}

function calculateBodyFat() {
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var height = document.getElementById('height').value;
    var waist = document.getElementById('waist').value;
    var neck = document.getElementById('neck').value;
    var hip = gender === 'female' ? document.getElementById('hip').value : null;
    var bodyFat = 0;

    if (gender === 'male') {
        bodyFat = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(2);
    } else {
        bodyFat = (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387).toFixed(2);
    }

    document.getElementById('bodyFatResult').innerText = bodyFat + '%';
    displayResults();
}

function calculateWeeklyLoss() {
    var currentWeight = document.getElementById('currentWeight').value;
    var goalWeight = document.getElementById('goalWeight').value;
    var weeks = prompt('Enter the number of weeks you want to reach your goal:');
    if (weeks > 0) {
        var weeklyLoss = ((currentWeight - goalWeight) / weeks).toFixed(2);
        document.getElementById('weeklyLossResult').innerText = weeklyLoss + ' kg/week';
        displayResults();
    } else {
        alert('Please enter a valid number of weeks.');
    }
}

function displayResults() {
    document.getElementById('results').style.display = 'block';
}