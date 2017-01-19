$(function() {
    var $inputImage = $('#inputImage'),
        URL = window.URL || window.webkitURL,
        blobURL;

    $('.btn-upload').click(function() {
        $inputImage.trigger('click');
    });
    $('.btn-remove').click(function() {
      $('#avatar').attr('src','').hide();
      $('.upload .img-name').text('未选择');
    });
    if (URL) {
        $inputImage.change(function() {
            var files = this.files,
                file,
                data = '';
            if (files && files.length) {
                file = files[0];
                if (/^image\/\w+$/.test(file.type)) {
                  $.get('pages/avatar.html',function(data){
                    swal({
                        title: '请调整新头像位置和大小',
                        html: data,
                        width: '30%',
                        showCancelButton: true ,
                        buttonsStyling: false,
                        confirmButtonClass: 'button button-primary button-pill button-small',
                        cancelButtonClass: 'button button-caution button-pill button-small',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        allowOutsideClick: false,
                        //确定之前做的事情
                        preConfirm: function() {
                            return new Promise(function(resolve) {
                              //传递到then方法
                              resolve();
                            });
                        }
                    }).then(function(result) {
                      imgCanvas = $image.cropper('getCroppedCanvas');
                      fileImg = imgCanvas.toDataURL('image/jpg');
                      $('#avatar').attr('src',fileImg).show();
                      $('.upload .img-name').text(file.name);
                    });
                    $image = $('#image');
                    $image.cropper({
                      aspectRatio: 1 / 1,
                      autoCropArea: 0.8,
                      movable: false,
                      resizable: false,
                      touchDragZoom: false,
                      mouseWheelZoom: false,
                      minCropBoxHeight: 300,
                      minContainerHeight: 300,
                      preview: '.img-preview',
                    });
                    $('.zoom').on({
                      click: function(){
                        $image.cropper('zoom', $(this).data('option'));
                      }
                    },'.zoomin,.zoomout');
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function() {
                        URL.revokeObjectURL(blobURL);
                    }).cropper('reset', true).cropper('replace', blobURL);
                    $inputImage.val('');
                  });
                } else {
                    showMessage('Please choose an image file.');
                }
            }
        });
    } else {
        $inputImage.parent().remove();
    }
})
