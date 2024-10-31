var ischeck = false;



$(document).ready(function() {
  let savedDishess = JSON.parse(localStorage.getItem('savedDishess')) || [];
  let container = $('#savedDishesContainers');
  if (savedDishess.length === 0) {
      container.html('<p class="text-center text-muted">0 Món</p><div class="text-center"><i class="fas fa-utensils fa-3x mb-3"></i><p>Xem món đã lưu tại đây :)</p><p class="text-muted">Lưu món yêu thích bằng cách nhấn vào biểu tượng lưu ở mỗi trang công thức.</p><button class="btn btn-primary">Bắt đầu tìm kiếm mới</button></div>');
  } else {
      savedDishess.forEach(dish => {
          container.append(`
              div class="khung-2 m-4 p-2">

        <div class="khung-3 m-3 px-2 mb-2">

          <div class="row">
            <div class="col-7">
              <div class="row mt-3">
                <div class="col-12">
                  <a href="Monan.html"><h2>Thịt heo xào cà chua</h2></a>
                </div>
                <div class="col-6 mt-3">
                  <img src="image/icon_clock.png" alt="icon" class="icon mr-2"><span>30 phút</span>
                </div>
                <div class="col-6 mt-3">
                  <img src="image/icon_user.png" alt="icon" class="icon mr-2"><span>2 người</span>
                </div>
                <div class="col-6 mt-3">
                  <img src="image/ngau.jpg" alt="avt" class="avt">
                  <span>Jisoo</span>
                </div>

                <div class="col-6 mt-3 pt-2">
                  2 phút trước
                </div>
              </div>
            </div>

            <div class="col-5 mon-an mt-3 mb-3">
              <img src="${dish.images}" alt="anh">
            </div>
          </div>

        </div>

        <div class="row mb-2">
          <div class="col-1 check">
            <input type="checkbox" id="checkbox">
          </div>
          <div class="col-2">

          </div>
          <div class="col-3">
            <button class="btn-bd-cn">Chấp nhận</button>
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <button class="btn-bd-tc">Từ chối</button>
          </div>
          <div class="col-2"></div>
        </div>

      </div>
          `);
      });
  }



  var sbv = $(".khung-2").length;
  changeSBV();
  function changeSBV(){
    $('.badge.badge-warning.col-6.ml-3').text("Bài viết cần duyệt " + sbv);
  };

  $('.btn-not-all').click(function(event) {
    event.preventDefault();

    var confirmTcAll = confirm("Bạn có chắc muốn xóa toàn bộ yêu cầu duyệt bài viết đã chọn không?");

    if (confirmTcAll) {
        // Chọn tất cả các checkbox đã được check
        $(":checkbox:checked").each(function() {
            
            sbv -= $(this).closest(".khung-2").length;
            
            $(this).closest(".khung-2").remove();
            changeSBV();
        });
    }
  });


  $('.btn-ac-all').click(function(event) {
    event.preventDefault();

    var confirmTcAll = confirm("Bạn có chắc muốn chấp nhận toàn bộ yêu cầu duyệt bài viết đã chọn không?");

    if (confirmTcAll) {
        // Chọn tất cả các checkbox đã được check
        $(":checkbox:checked").each(function() {
          sbv -= $(this).closest(".khung-2").length;
          $(this).closest(".khung-2").remove();
          changeSBV();
        });
    }
  });

  $('.btn-bd-cn').click(function(event) {
    event.preventDefault();
    sbv --;
    $(this).closest(".khung-2").remove();
    changeSBV();
  });
  
  $('.btn-bd-tc').click(function(event) {
    event.preventDefault();
    sbv--;
    $(this).closest(".khung-2").remove();
    changeSBV();
  });


  $(".collect-all").click(function() {
    ischeck = !ischeck;
    console.log(ischeck);
    $("input[type='checkbox']").prop("checked", ischeck);
  });
  
    // Xử lý sự kiện tìm kiếm
    $('.search-bar input').on('input', function() {
      const searchTerm = $(this).val().toLowerCase();
      const filteredIngredients = ingredients.filter(ingredient => {
        return ingredient.name.toLowerCase().includes(searchTerm);
      });
      displayIngredients(filteredIngredients);
    });
  
    // Xử lý sự kiện phê duyệt và từ chối (ví dụ)
    $('.ingredient-list').on('click', '.approve-btn', function() {
      // Lấy thông tin nguyên liệu cần phê duyệt
      const ingredientItem = $(this).closest('.ingredient-item');
      const ingredientName = ingredientItem.find('h3').text();
  
      // Gửi yêu cầu phê duyệt đến API (hoặc xử lý logic tương ứng)
      // ...
  
      // Cập nhật giao diện (ví dụ: xóa nguyên liệu khỏi danh sách)
      ingredientItem.remove();
    });
  
    // Tương tự cho sự kiện từ chối
  });
  