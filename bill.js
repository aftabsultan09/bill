document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const patientName = document.getElementById('patientName').value;
    const patientId = document.getElementById('patientId').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    const summaryText = `
        <div class="summary-container">
            <h2 class="summary-title">Payment Summary</h2>
            <p><strong>Patient Name:</strong> ${patientName}</p>
            <p><strong>Patient ID:</strong> ${patientId}</p>
            <p><strong>Amount:</strong> $${amount}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        </div>
    `;

    const newWindow = window.open('', '', 'width=400,height=400');
    newWindow.document.write('<html><head><title>Payment Summary</title>');
    newWindow.document.write('<link rel="stylesheet" href="bill.css">');
    newWindow.document.write('</head><body>');
    newWindow.document.write(summaryText);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    showPopup();
});

function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup', 'show');
    popup.innerHTML = `
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <button onclick="closePopup()">Close</button>
    `;

    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay', 'show');

    document.body.appendChild(popup);
    document.body.appendChild(overlay);
}

function closePopup() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup-overlay');
    if (popup) popup.remove();
    if (overlay) overlay.remove();
}
