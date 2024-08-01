function uploadFile() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function removeFeatures() {
    const features = ['feature1', 'feature2']; 
    fetch('/remove-features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function convertToNumbers() {
    fetch('/convert-to-numbers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function trainModels() {
    fetch('/train', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('metrics').innerText = `Accuracy: ${data.accuracy}`;
    });
}
