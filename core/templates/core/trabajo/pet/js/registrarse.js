document.getElementById('formFile').addEventListener('change', function (event) {
    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function () {
      const previewImage = document.getElementById('previewImage');
      previewImage.src = reader.result;
      previewImage.style.display = 'block';
    };
    
    if (input.files && input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    } else {
      previewImage.style.display = 'none';
    }
  });
