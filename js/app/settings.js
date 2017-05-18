$(function() {
  function getTree() {
    // Some logic to retrieve, or generate tree structure
    var tree = [
      {
        text: "Parent 1",
        nodes: [
          {
            text: "Child 1",
            nodes: [
              {
                text: "Grandchild 1"
              },
              {
                text: "Grandchild 2"
              }
            ]
          },
          {
            text: "Child 2"
          }
        ]
      },
      {
        text: "Parent 2"
      },
      {
        text: "Parent 3"
      },
      {
        text: "Parent 4"
      },
      {
        text: "Parent 5"
      }
    ];
    return tree;
  }

  $('#tree').treeview({
    collapseIcon: 'fa fa-minus',
    expandIcon: 'fa fa-plus',
    showCheckbox: true,
    checkedIcon: 'fa fa-check-square-o',
    uncheckedIcon: 'fa fa-square-o',
    data: getTree()
  });


  var $inputImage = $('#inputImage'),
    URL = window.URL || window.webkitURL,
    saveBnt = $('.btn-upload'),
    blobURL;

  $('.btn-upload').click(function() {
    $(this).addClass('loading');
    $inputImage.trigger('click');
    if ($inputImage.val()) {
      saveBnt.removeClass('loading');
    }
  });
  $('.btn-remove').click(function() {
    var _this = $(this);
    $('#avatar').attr('src', '').hide();
    $('.upload .img-name').text('未选择');
    $(this).addClass('loading');
    setTimeout(function() {
      _this.removeClass('loading');
    }, 500);
  });
  if (URL) {
    $inputImage.change(function() {
      var files = this.files,
        file,
        data = '';
      if (files && files.length) {
        file = files[0];
        if (/^image\/\w+$/.test(file.type)) {
          $.get('pages/avatar.html', function(data) {
            swal({
              title: '请调整新头像位置和大小',
              html: data,
              width: '30%',
              showCancelButton: true,
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
              $('#avatar').attr('src', fileImg).show();
              $('.upload .img-name').text(file.name);
              saveBnt.removeClass('loading');
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
              click: function() {
                $image.cropper('zoom', $(this).data('option'));
              }
            }, '.zoomin,.zoomout');
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
