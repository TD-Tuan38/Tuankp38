$(document).ready(function() {
    $("#selectAll").click(function() {
      $("tbody input[type=checkbox]").prop("checked", this.checked);
    });

    $('.btn-xoa').click(function(event) {
      event.preventDefault();
  
      var confirmTcAll = confirm("Bạn có chắc muốn xóa toàn bộ thông tin người dùng đã chọn không?");
  
      if (confirmTcAll) {
          // Chọn tất cả các checkbox đã được check
          $(":checkbox:checked").each(function() {
            
            $(this).closest("tbody").remove();
            
          });
      }
    });

    $('.btn.btn-sm.btn-danger.ml-2').click(function(event){
      event.preventDefault();
  
      var confirmTcAll = confirm("Bạn có chắc muốn xóa thông tin người dùng này không?");

      if (confirmTcAll) {
        
          
        $(this).closest("tbody").remove();
          
        
      }
    });



  });
  