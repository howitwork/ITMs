$(function() {
    $.get('pages/caseManagement.html', function(data) {
        $('.main-panel .content .tab-content').prepend(data);
        branch.initBootstrapTable();
        branch.initSelect();
    });
    $.get('data/data1.json', function(data) {
        $('input[name=caseNo]').val(data[0].DocumentNo);
    });
    $(document).on({
        keydown: function(e) {
            if (e.which == 13) {
                $(this).submit();
            }
        }
    }, '#form-case , #form-addCase');


    window.operateEvents1 = {
        'click .add': function(e, value, row, index) {
            $.get('pages/addCaseManagement.html', function(data) {
                swal({
                    title: '增加测试案例',
                    html: data,
                    width: '65%',
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonClass: 'button button-primary button-pill button-small',
                    cancelButtonClass: 'button button-caution button-pill button-small',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    allowOutsideClick: false
                }).then(function() {
                    console.log('aaa');
                    $('#form-addCase').submit();
                });
                console.log(row);
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
})
