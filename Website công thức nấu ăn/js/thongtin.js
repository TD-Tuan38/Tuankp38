$(document).ready(function() {
    // Nội dung mặc định khi tab "Đã lưu" được chọn
    var daLuuContent = $(".zx").html();

    // Nội dung khi tab "Món Của Tôi" được chọn
    var monCuaToiContent = `
      <div class="input-group mb-3">
      </div>
      <p class="text-center text-muted">Các món ăn của bạn sẽ được hiển thị ở đây</p>
      <div class="text-center">
        <a href="taomon.html" ><button class="btn btn-primary">Đăng món ăn mới</button></a>
      </div>
    `;

    var daluucontent = `
    <p class="text-center text-muted">0 Món</p><div class="text-center"><i class="fas fa-utensils fa-3x mb-3"></i><p>Xem món đã lưu tại đây :)</p><p class="text-muted">Lưu món yêu thích bằng cách nhấn vào biểu tượng lưu ở mỗi trang công thức.</p><button class="btn btn-primary">Bắt đầu tìm kiếm mới</button></div>
    `;


    // Xử lý sự kiện click vào tab "Món Của Tôi"
    $("#mon-cua-toi-tab").click(function(e) { // Sử dụng id của tab
      e.preventDefault();
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      $(".zx").html(monCuaToiContent);
    });
  
    // Xử lý sự kiện click vào tab "Đã lưu"
    $("#da-luu-tab").click(function(e) { // Sử dụng id của tab
      e.preventDefault();
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      $(".zx").html(daLuuContent);
      $(".cx").html(daluucontent);
    });
  });

  
  $(document).ready(function() {
    let savedDishes = JSON.parse(localStorage.getItem('savedDishes')) || [];
    let container = $('#savedDishesContainer');
    if (savedDishes.length === 0) {
        container.html('<p class="text-center text-muted">0 Món</p><div class="text-center"><i class="fas fa-utensils fa-3x mb-3"></i><p>Xem món đã lưu tại đây :)</p><p class="text-muted">Lưu món yêu thích bằng cách nhấn vào biểu tượng lưu ở mỗi trang công thức.</p><button class="btn btn-primary">Bắt đầu tìm kiếm mới</button></div>');
    } else {
        savedDishes.forEach(dish => {
            container.append(`
                <div class="card mb-4">
                    <div class="card-body d-flex align-items-center">
                        <a href="Monan.html" ><img src="${dish.image}" style="width: 80px; height: 80px;" class="rounded-circle mr-3" alt=""></a>
                        <div>
                            <a href="Monan.html" ><h5>${dish.name}</h5></a>
                        </div>
                        <!-- Nút Xóa Cho Mỗi Món -->
                        <button class="btn btn-danger ml-auto delete-dish-btn">Xoá</button>
                    </div>
                </div>
            `);
        });
    }

    

    // Xử lý sự kiện khi nhấn nút Xóa Cho Mỗi Món
    $(document).on('click', '.delete-dish-btn', function() {
        // Lấy index của món ăn cần xóa
        let index = $(this).closest('.card').index();
        // Xóa món ăn khỏi mảng savedDishes
        savedDishes.splice(index, 1);
        // Cập nhật lại local storage
        localStorage.setItem('savedDishes', JSON.stringify(savedDishes));
        // Xóa thẻ hiển thị món ăn tương ứng
        $(this).closest('.card').remove();
        // Cập nhật lại số lượng món ăn
        let totalDishes = savedDishes.length;
        if (totalDishes === 0) {
            container.html('<p class="text-center text-muted">0 Món</p><div class="text-center"><i class="fas fa-utensils fa-3x mb-3"></i><p>Xem món đã lưu tại đây :)</p><p class="text-muted">Lưu món yêu thích bằng cách nhấn vào biểu tượng lưu ở mỗi trang công thức.</p><button class="btn btn-primary">Bắt đầu tìm kiếm mới</button></div>');
        } else {
            container.find('p.text-muted').text(`${totalDishes} Món`);
        }
    });
});
  