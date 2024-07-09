document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('gadjetForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Form validation
        const category = document.querySelectorAll('input[name="category[]"]:checked');
        const gadjetName = document.getElementById('gadjetName').value.trim();
        const gadjetDescription = document.getElementById('gadjetDescription').value.trim();
        const pickupDate = document.getElementById('pickupDate').value;
        const gadjetImage = document.getElementById('gadjetImage').files[0];

        if (category.length === 0) {
            alert('Please select at least one category.');
            return;
        }

        if (gadjetName === '') {
            alert('Please enter the gadget name.');
            return;
        }

        if (gadjetDescription === '') {
            alert('Please enter the gadget description.');
            return;
        }

        if (pickupDate === '') {
            alert('Please select a pickup date.');
            return;
        }

        if (!gadjetImage) {
            alert('Please upload a gadget image.');
            return;
        }

        // Display confirmation message
        alert('Form submitted successfully!');

        // You can add additional code here to handle the form data, such as sending it to a server

        // Reset the form after successful submission
        form.reset();
    });
});
