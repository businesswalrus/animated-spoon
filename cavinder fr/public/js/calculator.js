document.getElementById('calculatorForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        serviceType: document.getElementById('serviceType').value,
        materialCost: parseFloat(document.getElementById('materialCost').value),
        laborCategory: document.getElementById('laborCategory').value,
        minutes: document.getElementById('minutes').value,
        includeTax: document.getElementById('includeTax').checked
    };
    
    try {
        const response = await fetch('/api/calc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Display results
        document.getElementById('materialCharge').textContent = `$${data.materialCharge.toFixed(2)}`;
        document.getElementById('laborCharge').textContent = `$${data.laborCharge.toFixed(2)}`;
        document.getElementById('total').textContent = `$${data.total.toFixed(2)}`;
        document.getElementById('results').style.display = 'block';
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while calculating. Please try again.');
    }
});