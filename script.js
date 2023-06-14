document.getElementById('image-generator-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const prompt = document.getElementById('prompt').value;
    const imageContainer = document.getElementById('image-container');
    const modal = document.getElementById('modal');

    try {
        modal.style.display = 'block';
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({ model: 'image-alpha-001', prompt: prompt, num_images: 1 })
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.data[0].url;

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = prompt;
            imageContainer.innerHTML = '';
            modal.style.display = 'none';
            imageContainer.appendChild(img);
        } else {
            throw new Error('Failed to generate image');
        }
    } catch (error) {
        console.error(error);
        modal.style.display = 'none';
        imageContainer.innerHTML = 'Error generating image. Please try again.';
    }
});
