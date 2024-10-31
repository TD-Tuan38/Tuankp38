$(document).ready(function() {

  
  $('#loginBtn').click(function(event){
    event.preventDefault();

    var username = $('#username').val().trim();
    var password = $('#password').val().trim();

  if (username == 'admin' && password == '1'){
    window.location.href= 'admin_duyet.html';
    return;
  }   

        if (username === '' || password === '') {
            $('#errorMessage').text('Vui lòng nhập tài khoản và mật khẩu');
        } else {
            if (username == 'a' && password == 'a'){
              $('#errorMessage').text('Tài khoản hoặc mật khẩu không chính xác');
            } else {
              // Khi cả hai trường đều không trống, chuyển hướng đến trang chính
              window.location.href = 'trangchu.html';
            }
        }
  });
  


    $('.close-btn').click(function() {
      $('.login-form').fadeOut(); // Ẩn form khi nhấn nút X
    });
  
    $('.back-btn').click(function() {
      // Thêm xử lý khi nhấn nút quay lại (nếu cần)
    });
  });
  