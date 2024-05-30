function promotion(année) {
    var image;
    if (année==2023) {
        image = "promotion_2023.jpg"
    }
    else if (année==2022) {
        image = "promotion_2022.jpg"
    }
    else {
        image = "promotion_2021.jpg"
    }
    document.getElementById('monImage').src=image
}