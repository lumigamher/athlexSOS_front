function checkSubstitution() {
    const minute = parseInt(document.getElementById('minute').value);
    const fatigue = parseInt(document.getElementById('fatigue').value);
    const performance = parseInt(document.getElementById('performance').value);
    
    fetch('http://127.0.0.1:5000/api/check_substitution', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ minute, fatigue, performance }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const recommendationBox = document.getElementById('recommendation');
        recommendationBox.innerText = data.recommendation;
        recommendationBox.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}