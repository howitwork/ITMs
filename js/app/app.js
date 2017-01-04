$(function() {
    var app = {
        getManagementPage: function(pageUrl) {
            $.get(pageUrl, function(data) {
                $('.main-panel .content .tab-content').prepend(data);
                branch.initBootstrapTable();
                branch.initSelect();
            });
        },

        getOperationPage: function(operateUrl, title, width, showCancelButton) {
            $.get(operateUrl, function(data) {
                swal({
                    title: title,
                    html: data,
                    width: width,
                    showCancelButton: showCancelButton,
                    buttonsStyling: false,
                    confirmButtonClass: 'button button-primary button-pill button-small',
                    cancelButtonClass: 'button button-caution button-pill button-small',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    allowOutsideClick: false
                }).then(function() {

                });
                branch.initSelect();
                branch.initDatetimepicker();
            });
        }
    }

    app.getManagementPage('pages/systemManagement/user/userManagement.html');
    app.getManagementPage('pages/systemManagement/role/roleManagement.html');
    app.getManagementPage('pages/systemManagement/menu/menuManagement.html');
    window.operateEvents4 = {
        'click .add': function(e, value, row, index) {
          app.getOperationPage(
              'pages/systemManagement/menu/add.html',
              '新增菜单',
              '40%',
              'true'
          )
        },
        'click .view': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/menu/view.html',
                '查看菜单',
                '40%',
                'false'
            )
        },
        'click .edit': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/menu/edit.html',
                '编辑菜单',
                '43%',
                'true'
            )
        },
        'click .remove': function(e, value, row, index) {
            $('#contactTable').bootstrapTable('remove', {
                field: 'caseNo',
                values: [row.caseNo]
            });
            return false;
        }
    };
    window.operateEvents3 = {
        'click .add': function(e, value, row, index) {
          app.getOperationPage(
              'pages/systemManagement/role/add.html',
              '新增角色',
              '40%',
              'true'
          )
        },
        'click .view': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/role/view.html',
                '查看角色',
                '40%',
                'false'
            )
        },
        'click .edit': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/role/edit.html',
                '编辑角色',
                '43%',
                'true'
            )
        },
        'click .remove': function(e, value, row, index) {
            $('#contactTable').bootstrapTable('remove', {
                field: 'caseNo',
                values: [row.caseNo]
            });
            return false;
        }
    };
    window.operateEvents2 = {
        'click .add': function(e, value, row, index) {
          app.getOperationPage(
              'pages/systemManagement/user/add.html',
              '新增用户',
              '43%',
              'true'
          )
        },
        'click .view': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/user/view.html',
                '查看用户',
                '40%',
                'false'
            )
        },
        'click .edit': function(e, value, row, index) {
            app.getOperationPage(
                'pages/systemManagement/user/edit.html',
                '编辑用户',
                '43%',
                'true'
            )
        },
        'click .remove': function(e, value, row, index) {
            $('#contactTable').bootstrapTable('remove', {
                field: 'caseNo',
                values: [row.caseNo]
            });
            return false;
        }
    };
})
