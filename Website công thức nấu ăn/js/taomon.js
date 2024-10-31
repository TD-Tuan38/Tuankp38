$(document).ready(function() {
    $('#saveDishBtn').click(function() {
        let dishName = $('#recipe-name').text();
        let dishTime = $('#time').text();
        let dishKhauPhan = $('#servings').text();
        let dishImage = $('#dishImages').attr('src');
        let savedDishess = JSON.parse(localStorage.getItem('savedDishess')) || [];
        savedDishess.push({ name: dishName, image: dishImages, time: dishTime, khauphan: dishKhauPhan });
        localStorage.setItem('savedDishess', JSON.stringify(savedDishess));
        alert('Món ăn đã được lưu!');
    });
});