$(function() {
    var app = {
      getManagementPage : function(pageUrl){
        $.get(pageUrl, function(data) {
            $('.main-panel .content .tab-content').prepend(data);
            branch.initBootstrapTable();
            branch.initSelect();
        });
      },
      getOperationPage : function(obj,viewUrl,editUrl,title,width){
        console.log(obj);
        obj = {
            'click .add': function(e, value, row, index) {
                $.get(addUrl, function(data) {
                    console.log(data);
                    swal({
                        title: '增加' + title,
                        html: data,
                        width: width,
                        showCancelButton: true,
                        buttonsStyling: false,
                        confirmButtonClass: 'button button-primary button-pill button-small',
                        cancelButtonClass: 'button button-caution button-pill button-small',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        allowOutsideClick: false
                    }).then(function() {

                    });
                    $('.swal2-modal input[name=caseNo]').val(row.caseNo);
                    branch.initSelect();
                    branch.initDatetimepicker();
                });
            },
            'click .view': function(e, value, row, index) {
                $.get(viewUrl, function(data) {
                    swal({
                        title: '查看' + title,
                        html: data,
                        width: width,
                        showCancelButton: false,
                        buttonsStyling: false,
                        confirmButtonClass: 'button button-primary button-pill button-small',
                        cancelButtonClass: 'button button-caution button-pill button-small',
                        // confirmButtonText: '确定',
                        // cancelButtonText: '取消',
                        allowOutsideClick: false
                    }).then(function() {

                    });
                    $('.swal2-modal input[name=caseNo]').val(row.caseNo);
                    branch.initSelect();
                    branch.initDatetimepicker();
                });
            },
            'click .edit': function(e, value, row, index) {
              $.get(editUrl, function(data) {
                  swal({
                      title: '修改' + title,
                      html: data,
                      width: width,
                      showCancelButton: true,
                      buttonsStyling: false,
                      confirmButtonClass: 'button button-primary button-pill button-small',
                      cancelButtonClass: 'button button-caution button-pill button-small',
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      allowOutsideClick: false
                  }).then(function() {

                  });
                  $('.swal2-modal input[name=caseNo]').val(row.caseNo);
                  branch.initSelect();
                  branch.initDatetimepicker();
              });
            },
            'click .remove': function(e, value, row, index) {
                console.log(row);
                $('#contactTable').bootstrapTable('remove', {
                    field: 'caseNo',
                    values: [row.caseNo]
                });
                return false;
            }
        }
        console.log(obj);
        console.log(window.operateEvents2);
      }
    }

    app.getManagementPage('pages/systemManagement/user/userManagement.html');
    app.getManagementPage('pages/systemManagement/role/roleManagement.html');
    app.getManagementPage('pages/systemManagement/menu/menuManagement.html');
    app.getOperationPage(
      'window.operateEvents2',
      'pages/systemManagement/user/add.html',
      'pages/systemManagement/user/view.html',
      'pages/systemManagement/user/edit.html',
      '用户',
      '40%');
    // app.getOperationPage(
    //   'pages/systemManagement/role/add.html',
    //   'pages/systemManagement/role/view.html',
    //   'pages/systemManagement/role/edit.html',
    //   '角色',
    //   '40%');
    // app.getOperationPage(
    //   'pages/systemManagement/menu/add.html',
    //   'pages/systemManagement/menu/view.html',
    //   'pages/systemManagement/menu/edit.html',
    //   '菜单',
    //   '40%');
    // $.get('pages/systemManagement/user/userManagement.html', function(data) {
    //     $('.main-panel .content .tab-content').prepend(data);
    //     branch.initBootstrapTable();
    //     branch.initSelect();
    // });
    // $.get('pages/systemManagement/role/roleManagement.html', function(data) {
    //     $('.main-panel .content .tab-content').prepend(data);
    //     branch.initBootstrapTable();
    //     branch.initSelect();
    // });
    // $.get('pages/systemManagement/menu/menuManagement.html', function(data) {
    //     $('.main-panel .content .tab-content').prepend(data);
    //     branch.initBootstrapTable();
    //     branch.initSelect();
    // });
    // $.get('data/data1.json', function(data) {
    //     $('input[name=caseNo]').val(data[0].DocumentNo);
    // });
    // $(document).on({
    //     keydown: function(e) {
    //         if (e.which == 13) {
    //             $(this).submit();
    //         }
    //     }
    // }, '#form-case , #form-addCase');
    // window.operateEvents4 = {
    //     'click .add': function(e, value, row, index) {
    //         $.get('pages/systemManagement/menu/add.html', function(data) {
    //             swal({
    //                 title: '增加菜单',
    //                 html: data,
    //                 width: '40%',
    //                 showCancelButton: true,
    //                 buttonsStyling: false,
    //                 confirmButtonClass: 'button button-primary button-pill button-small',
    //                 cancelButtonClass: 'button button-caution button-pill button-small',
    //                 confirmButtonText: '确定',
    //                 cancelButtonText: '取消',
    //                 allowOutsideClick: false
    //             }).then(function() {
    //
    //             });
    //             $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //             branch.initSelect();
    //             branch.initDatetimepicker();
    //         });
    //     },
    //     'click .view': function(e, value, row, index) {
    //         $.get('pages/systemManagement/role/view.html', function(data) {
    //             swal({
    //                 title: '查看用户',
    //                 html: data,
    //                 width: '40%',
    //                 showCancelButton: false,
    //                 buttonsStyling: false,
    //                 confirmButtonClass: 'button button-primary button-pill button-small',
    //                 cancelButtonClass: 'button button-caution button-pill button-small',
    //                 // confirmButtonText: '确定',
    //                 // cancelButtonText: '取消',
    //                 allowOutsideClick: false
    //             }).then(function() {
    //
    //             });
    //             $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //             branch.initSelect();
    //             branch.initDatetimepicker();
    //         });
    //     },
    //     'click .edit': function(e, value, row, index) {
    //       $.get('pages/systemManagement/role/edit.html', function(data) {
    //           swal({
    //               title: '修改用户',
    //               html: data,
    //               width: '43%',
    //               showCancelButton: true,
    //               buttonsStyling: false,
    //               confirmButtonClass: 'button button-primary button-pill button-small',
    //               cancelButtonClass: 'button button-caution button-pill button-small',
    //               confirmButtonText: '确定',
    //               cancelButtonText: '取消',
    //               allowOutsideClick: false
    //           }).then(function() {
    //
    //           });
    //           $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //           branch.initSelect();
    //           branch.initDatetimepicker();
    //       });
    //     },
    //     'click .remove': function(e, value, row, index) {
    //         console.log(row);
    //         $('#contactTable').bootstrapTable('remove', {
    //             field: 'caseNo',
    //             values: [row.caseNo]
    //         });
    //         return false;
    //     }
    // }
    // window.operateEvents3 = {
    //     'click .add': function(e, value, row, index) {
    //         $.get('pages/systemManagement/role/add.html', function(data) {
    //             swal({
    //                 title: '增加角色',
    //                 html: data,
    //                 width: '40%',
    //                 showCancelButton: true,
    //                 buttonsStyling: false,
    //                 confirmButtonClass: 'button button-primary button-pill button-small',
    //                 cancelButtonClass: 'button button-caution button-pill button-small',
    //                 confirmButtonText: '确定',
    //                 cancelButtonText: '取消',
    //                 allowOutsideClick: false
    //             }).then(function() {
    //                 $('#form-addCase').submit();
    //             });
    //             $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //             branch.initSelect();
    //             branch.initDatetimepicker();
    //         });
    //     },
    //     'click .view': function(e, value, row, index) {
    //         $.get('pages/systemManagement/role/view.html', function(data) {
    //             swal({
    //                 title: '查看用户',
    //                 html: data,
    //                 width: '40%',
    //                 showCancelButton: false,
    //                 buttonsStyling: false,
    //                 confirmButtonClass: 'button button-primary button-pill button-small',
    //                 cancelButtonClass: 'button button-caution button-pill button-small',
    //                 // confirmButtonText: '确定',
    //                 // cancelButtonText: '取消',
    //                 allowOutsideClick: false
    //             }).then(function() {
    //                 $('#form-addCase').submit();
    //             });
    //             $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //             branch.initSelect();
    //             branch.initDatetimepicker();
    //         });
    //     },
    //     'click .edit': function(e, value, row, index) {
    //       $.get('pages/systemManagement/role/edit.html', function(data) {
    //           swal({
    //               title: '修改用户',
    //               html: data,
    //               width: '43%',
    //               showCancelButton: true,
    //               buttonsStyling: false,
    //               confirmButtonClass: 'button button-primary button-pill button-small',
    //               cancelButtonClass: 'button button-caution button-pill button-small',
    //               confirmButtonText: '确定',
    //               cancelButtonText: '取消',
    //               allowOutsideClick: false
    //           }).then(function() {
    //               $('#form-addCase').submit();
    //           });
    //           $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //           branch.initSelect();
    //           branch.initDatetimepicker();
    //       });
    //     },
    //     'click .remove': function(e, value, row, index) {
    //         console.log(row);
    //         $('#contactTable').bootstrapTable('remove', {
    //             field: 'caseNo',
    //             values: [row.caseNo]
    //         });
    //         return false;
    //     }
    // }
    // window.operateEvents2 = {
    //     'click .view': function(e, value, row, index) {
    //         $.get('pages/systemManagement/user/view.html', function(data) {
    //             swal({
    //                 title: '查看用户',
    //                 html: data,
    //                 width: '40%',
    //                 showCancelButton: false,
    //                 buttonsStyling: false,
    //                 confirmButtonClass: 'button button-primary button-pill button-small',
    //                 cancelButtonClass: 'button button-caution button-pill button-small',
    //                 // confirmButtonText: '确定',
    //                 // cancelButtonText: '取消',
    //                 allowOutsideClick: false
    //             }).then(function() {
    //                 $('#form-addCase').submit();
    //             });
    //             $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //             branch.initSelect();
    //             branch.initDatetimepicker();
    //         });
    //     },
    //     'click .edit': function(e, value, row, index) {
    //       $.get('pages/systemManagement/user/edit.html', function(data) {
    //           swal({
    //               title: '修改用户',
    //               html: data,
    //               width: '43%',
    //               showCancelButton: true,
    //               buttonsStyling: false,
    //               confirmButtonClass: 'button button-primary button-pill button-small',
    //               cancelButtonClass: 'button button-caution button-pill button-small',
    //               confirmButtonText: '确定',
    //               cancelButtonText: '取消',
    //               allowOutsideClick: false
    //           }).then(function() {
    //               $('#form-addCase').submit();
    //           });
    //           $('.swal2-modal input[name=caseNo]').val(row.caseNo);
    //           branch.initSelect();
    //           branch.initDatetimepicker();
    //       });
    //     },
    //     'click .remove': function(e, value, row, index) {
    //         console.log(row);
    //         $('#contactTable').bootstrapTable('remove', {
    //             field: 'caseNo',
    //             values: [row.caseNo]
    //         });
    //         return false;
    //     }
    // }
})
