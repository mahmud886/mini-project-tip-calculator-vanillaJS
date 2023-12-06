document.addEventListener('DOMContentLoaded', () => {
    const btnCalculate = document.getElementById('calculate');
    const billInput = document.getElementById('bill');
    const tipInput = document.getElementById('tip');
    const totalBill = document.getElementById('total');

    const calculateTotal = () => {
        const billValue = parseFloat(billInput.value) || 0;
        const tipValue = parseFloat(tipInput.value) || 0;

        const totalBillValue = billValue * (1 + tipValue / 100);
        totalBill.innerText = totalBillValue.toFixed(2);

        billInput.value = '';
        tipInput.value = '';
    };

    btnCalculate.addEventListener('click', calculateTotal);
});
