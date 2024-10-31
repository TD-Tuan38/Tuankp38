$(document).ready(function() {
  
  $('#regitBtn').click(function(event){
    event.preventDefault();

    var username = $('#username').val().trim();
    var password = $('#password').val().trim();
    var repassword = $('#re-password').val().trim();

        if (username === '' || password === '' || repassword==='') {
            $('#errorMessage').text('Vui lòng điền đầy đủ thông tin');
        } else {
          if (username == 'admin'){
            $('#errorMessage').text('Không thể đặt tên tài khoản này');
          } else {
            alert("Bạn đã đăng ký thành công!");
              // Khi cả hai trường đều không trống, chuyển hướng đến trang chính
            window.location.href = 'dangnhap.html';
          }
      
              
        }
    
  });

    $('.close-btn').click(function() {
      $('.registration-form').fadeOut(); // Ẩn form khi nhấn nút X
    });
  
    $('.back-btn').click(function() {
      // Xử lý sự kiện khi nhấn nút quay lại (nếu cần)
    });
  });
  