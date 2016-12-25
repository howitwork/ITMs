var branch = {
    init: function() {
      this.renderData();
      this.initDropdown();
      this.initTooltip();
      this.initPopover();
      this.initNavigator();
      this.initSweetAlert();
      this.initNotify();
      this.initDatetimepicker();
      this.initValidator();
      this.initBootstrapTable();
    },
/**组件的初始化 start *************************/
    //下拉菜单
    initDropdown : function() {
      $('.dropdown-toggle').dropdown();
    },
    //提示
    initTooltip : function() {
      $('[data-toggle=tooltip]').tooltip('show');
    },
    //弹窗
    initPopover : function(){
      $('[data-toggle=popover]').popover('show');
    },
    //windows系统滚动条优化
    initNavigator : function(){
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      if (isWindows) {
          $('.sidebar .sidebar-wrapper').perfectScrollbar();
          $('.main.tab-content').perfectScrollbar();
      }
    },
    /*
     * sweet alert 2
     */
    initSweetAlert : function(){},
    /*
     * 警告框的设置 notify
     */
    initNotify : function(){},
    /*
     * 设置datetimepicker
     */
    initDatetimepicker : function() {
      $('.date.datepicker').datetimepicker({
          // viewMode: 'years',
          // format: 'YYYY/MM'
      });
    },
    /*
     * 设置validator
     */
    initValidator : function(){},
    /*
     * 设置bootstrap table
     */
    initBootstrapTable : function(){
      // //先销毁表格
      $('#contactTable').bootstrapTable('destroy').bootstrapTable({});
      $('#contactTable').bootstrapTable('resetView');
    },
    /*
     * bootstrap-select初始化
     */
    initBootstapSelect : function(){
      $('.selectpicker').selectpicker('refresh');
    },
/**组件的初始化 end ****************************/


/**页面渲染部分 start **************************/
    renderData: function() {
            //主题设置
            $('.switch-onColor').bootstrapSwitch();
            $('.nav.navbar-nav .theme .dropdown-menu>li>a').click(function(e) {
                e.stopPropagation();
            })
            $('.nav.navbar-nav .theme .badge').click(function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var new_color = $(this).data('color');
                $('.sidebar').attr('data-color', new_color);
                $('#minimizeSidebar').attr('data-color', new_color).addClass('hasColor');
                $('#themes').attr('href', './css/themes/' + new_color + '.css');
                if ($.cookie('themeColor') == '') {
                    $.cookie('themeColor', new_color, {
                        expires: 30
                    });
                } else {
                    $.cookie('themeColor', '', {
                        expires: -1
                    });
                    $.cookie('themeColor', new_color, {
                        expires: 30
                    });
                }
            });
            $('.nav.navbar-nav .theme .adjustments-line .switch-onColor.debar').on('switchChange.bootstrapSwitch', function(event, state) {
                if (state == false) {
                    $.cookie('switchdebar', '', {
                        expires: -1
                    });
                    $.cookie('switchdebar', 'false', {
                        expires: 30
                    });
                    miniSidebarOn();
                } else {
                    $.cookie('switchdebar', '', {
                        expires: -1
                    });
                    $.cookie('switchdebar', 'true', {
                        expires: 30
                    });
                    miniSidebarOff();
                }
            });
            $('.nav.navbar-nav .theme .adjustments-line .switch-onColor.img').on('switchChange.bootstrapSwitch', function(event, state) {
                if (state == false) {
                    $.cookie('switchImg', '', {
                        expires: -1
                    });
                    $.cookie('switchImg', 'false', {
                        expires: 30
                    });
                    $('.sidebar .sidebar-background').css('background-image', 'url("")');
                } else {
                    $.cookie('switchImg', '', {
                        expires: -1
                    });
                    $.cookie('switchImg', 'true', {
                        expires: 30
                    });
                    $('.sidebar .sidebar-background').css('background-image', 'url("' + $.cookie('themeImg') + '")');
                }
            });
            $('.nav.navbar-nav .theme .img-holder').click(function() {
                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');
                var new_image = $(this).find("img").attr('src');
                $sidebarBackground = $('.sidebar .sidebar-background');
                $sidebarBackground.fadeOut('fast', function() {
                    $sidebarBackground.css('background-image', 'url("' + new_image + '")');
                    $sidebarBackground.fadeIn('fast');
                });
                if ($.cookie('themeImg') == '') {
                    $.cookie('themeImg', new_image, {
                        expires: 30
                    });
                } else {
                    $.cookie('themeImg', '', {
                        expires: -1
                    });
                    $.cookie('themeImg', new_image, {
                        expires: 30
                    });
                }
            });
            /*
             *点击收缩菜单
             */
            $('.user .photo').tooltip('toggle');

            function miniSidebarOn() {
                $('#minimizeSidebar').find('i').attr('class', 'ti-menu-alt');
                $('.sidebar').addClass('mini');
                $('body').addClass('sidebar-mini');
                $('.sidebar .logo').addClass('hidden');
                $('.mini-logo').removeClass('hidden');
                $('.user .photo').width(50);
                $('.user .info').css('display', 'none');
                $('.sidebar.mini .nav li a').attr('data-toggle', '');
            };

            function miniSidebarOff() {
                $('#minimizeSidebar').find('i').attr('class', 'ti-more-alt');
                $('.sidebar').removeClass('mini');
                $('body').removeClass('sidebar-mini');
                $('.sidebar .logo').removeClass('hidden');
                $('.mini-logo').addClass('hidden');
                $('.user .photo').width(60);
                $('.user .info').css('display', 'block');
                $('.sidebar .nav li a').attr('data-toggle', 'collapse');
                $('.sidebar .collapse').css('display', '');
            };
            var sidebar_switch = true;
            $('#minimizeSidebar').on('click', function() {
                if (sidebar_switch) {
                    miniSidebarOn();
                    sidebar_switch = false;
                } else {
                    miniSidebarOff();
                    sidebar_switch = true;
                }
            });

            //hover 时候出现菜单
            var timer = '';
            $('.user .photo').popover({
                trigger: 'manual', //触发方式
                // title:'aaa',//设置 弹出框 的标题
                html: true, // 为true的话，data-content里就能放html代码了
                placement: 'right',
                content: contentText
            }).mouseenter(function() {
                if ($('.sidebar').hasClass('mini')) {
                    $(this).popover('show');
                }
            }).mouseleave(function() {
                var _this = this;
                timer = setTimeout(function() {
                    $(_this).popover('hide');
                }, 200);
            });
            $('.user').on('mouseenter', '.popo-list', function() {
                clearTimeout(timer);
            }).on('mouseleave', '.popo-list', function() {
                $('.user .photo').popover('hide');
            });

            function contentText() {
                return [
                    '<ul class="popo-list">',
                    '<li><a href="#profile">My Profile</a></li>',
                    '<li><a href="#editprofile">Edit Profile</a></li>',
                    '<li><a href="#settings">Settings</a></li>',
                    '</ul>'
                ].join('');
            }
            $(window).resize(function() {


            });
            $('.wrapper').on('mouseenter', '.sidebar.mini .sidebar-wrapper>.nav>li.list', function() {
                $('.sidebar.mini .collapse').eq($(this).index()).css('display', 'block');
                $(this).addClass('triangle');
                $('.sidebar.mini .sidebar-wrapper>.nav li>a').click(function() {
                    event.preventDefault();
                    // event.stopPropagation();
                });
            }).on('mouseleave', '.sidebar.mini .sidebar-wrapper>.nav>li', function() {
                $('.sidebar.mini .collapse').eq($(this).index()).css('display', 'none');
                $('.sidebar.mini .sidebar-wrapper>.nav>li').removeClass('triangle');
            });



            /*
             * 点击切换tab页
             */
            $('.nav-tabs').on('click', 'a', function() {
                var _this = this;
                $(this).tab('show');
                $('.sidebar .sidebar-wrapper>.nav li>a').each(function() {
                    if ($(this).attr('data-menu-id') == $(_this).attr('href').substring(1)) {
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        $(this).parent().addClass('active');
                    }
                });
            });


            /*
             * 点击tab页上的X关闭tab页
             */
            $('.nav-tabs').on('click', 'li .ti-close', function() {
                var _this = this;
                if ($(_this).closest('li').next().length > 0) {
                    //找到下一个tab页面 出发点击事件
                    $(_this).closest('li').next().find('a').trigger('click');
                } else {
                    //如果没有下一个，找到上一个tab页面 出发点击事件
                    $(_this).closest('li').prev().find('a').trigger('click');
                };
                if ($(_this).closest('li').siblings().length == 0) {
                    //如果是最后一个弹出提示
                    swal({
                        title: "已经是最后一个了!",
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-primary btn-lg'
                    });
                } else {
                    //移除tab标签  且  给菜单上的open开关移除
                    $(_this).closest('li').remove();
                    // $('.nav-tabs.main>li').width((($('.nav-tabs.main').width() - 1) / $('.nav-tabs.main>li').length) - 1);
                    $('.sidebar .sidebar-wrapper>.nav li>a').each(function() {
                        if ($(this).attr('data-menu-id') == $(_this).closest('a').attr('href').substring(1)) {
                            $(this).removeClass('open');
                        }
                    });
                }

                return false;
            });
            /*
             * 点击左侧菜单，添加到tab页面里
             */
            $('.sidebar .sidebar-wrapper').on('click', '.nav>li>a.transactionDemo', function() {
                $('.sidebar .sidebar-wrapper .nav ul li>a[data-menu-id=customerInformation]').trigger('click');
                $(this).parent().siblings().removeClass('active');
                $(this).parent().siblings().find('a').removeClass('active');
                $(this).parent().addClass('active');
            });
            $('.sidebar .sidebar-wrapper').on('click', '.nav ul li>a', function() {
                //判断此tab页有没有打开 如果打开定位到此tab页面 如果没有打开就显示此页
                if ($(this).hasClass('menu')) {
                    console.log('menu');
                } else {
                    if ($(this).hasClass('open')) {
                        console.log('open');
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().addClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
                    } else {
                        $(this).addClass('open');
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().addClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        var tab = $('<li role="presentation"><a href=' + '#' + $(this).attr('data-menu-id') + ' role="tab" data-toggle="tab">' + $(this).text() + '<i class="ti-close"></i></a></li>');
                        $('.nav.nav-tabs.main').append(tab);
                        // $('.nav-tabs.main>li').width((($('.nav-tabs.main').width() - 1) / $('.nav-tabs.main>li').length));
                        $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
                    }
                }
            });

    },
/**页面渲染部分 end ****************************/
}
