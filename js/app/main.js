/**
 * [branch 这个框架的主要对象]
 * @type {Object}
 */
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
    this.initSelect();
    this.initTypeahead();
    this.initFileinput();
  },
  /**组件的初始化 start *************************/
  //文件选择
  initFileinput: function(fileId, preview, previewConfig) {
    $('#input-701').fileinput({
      language: 'zh',
      theme: 'explorer',
      uploadUrl: '/itm/service/upload_usecase',
      // uploadAsync: false,
      //dropZoneEnabled: false,//是否显示拖拽区域
      //minImageWidth: 50, //图片的最小宽度
      //minImageHeight: 50,//图片的最小高度
      //maxImageWidth: 1000,//图片的最大宽度
      //maxImageHeight: 1000,//图片的最大高度
      //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
      maxFileCount: 5,
      overwriteInitial: false,
      initialPreviewAsData: true,
      initialPreview: [
        // IMAGE DATA
        'http://lorempixel.com/800/460/business/1',
        // IMAGE RAW MARKUP
        '<img src="http://lorempixel.com/800/460/business/2" class="kv-preview-data file-preview-image" style="height:160px">',
        // TEXT DATA
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mauris ut libero fermentum feugiat eu et dui. Mauris condimentum rhoncus enim, sed semper neque vestibulum id. Nulla semper, turpis ut consequat imperdiet, enim turpis aliquet orci, eget venenatis elit sapien non ante. Aliquam neque ipsum, rhoncus id ipsum et, volutpat tincidunt augue. Maecenas dolor libero, gravida nec est at, commodo tempor massa. Sed id feugiat massa. Pellentesque at est eu ante aliquam viverra ac sed est.",
        // PDF DATA
        'http://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
        // VIDEO DATA
        "http://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4",
      ],
      initialPreviewAsData: true, // defaults markup
      initialPreviewFileType: 'image', // image is the default and can be overridden in config below
      initialPreviewConfig: [
        {
          caption: "Business 1",
          filename: "Business-1.jpg",
          size: 762980,
          url: "/site/file-delete",
          key: 11
        },
        {
          previewAsData: false,
          size: 823782,
          caption: "Business 2",
          filename: "Business-2.jpg",
          url: "/site/file-delete",
          key: 13
        },
        {
          caption: "Lorem Ipsum",
          filename: "LoremIpsum.txt",
          type: "text",
          size: 1430,
          url: "/site/file-delete",
          key: 12
        },
        {
          type: "pdf",
          size: 8000,
          caption: "PDF Sample",
          filename: "PDF-Sample.pdf",
          url: "/file-upload-batch/2",
          key: 14
        },
        {
          type: "video",
          size: 375000,
          filetype: "video/mp4",
          caption: "Krajee Sample",
          filename: "KrajeeSample.mp4",
          url: "/file-upload-batch/2",
          key: 15
        },
      ],
      uploadExtraData: {
        img_key: "1000",
        img_keywords: "happy, nature",
      },
      preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
      previewFileIconSettings: { // configure your icon file extensions
        'doc': '<i class="fa fa-file-word-o text-primary"></i>',
        'xls': '<i class="fa fa-file-excel-o text-success"></i>',
        'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
        'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
        'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
        'htm': '<i class="fa fa-file-code-o text-info"></i>',
        'txt': '<i class="fa fa-file-text-o text-info"></i>',
        'mov': '<i class="fa fa-file-movie-o text-warning"></i>',
        'mp3': '<i class="fa fa-file-audio-o text-warning"></i>',
        // note for these file types below no extension determination logic
        // has been configured (the keys itself will be used as extensions)
        'jpg': '<i class="fa fa-file-photo-o text-danger"></i>',
        'gif': '<i class="fa fa-file-photo-o text-muted"></i>',
        'png': '<i class="fa fa-file-photo-o text-primary"></i>'
      },
      previewFileExtSettings: { // configure the logic for determining icon file extensions
        'doc': function(ext) {
          return ext.match(/(doc|docx)$/i);
        },
        'xls': function(ext) {
          return ext.match(/(xls|xlsx)$/i);
        },
        'ppt': function(ext) {
          return ext.match(/(ppt|pptx)$/i);
        },
        'zip': function(ext) {
          return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
        },
        'htm': function(ext) {
          return ext.match(/(htm|html)$/i);
        },
        'txt': function(ext) {
          return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
        },
        'mov': function(ext) {
          return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
        },
        'mp3': function(ext) {
          return ext.match(/(mp3|wav)$/i);
        },
      },
      previewZoomButtonIcons: {
        prev: '<i class="fa fa-chevron-left"></i>',
        next: '<i class="fa fa-chevron-right"></i>',
      },
      fileActionSettings: {
        dragIcon: '<i class="fa fa-bars"></i>',
      }
    }).on('filesorted', function(e, params) {
      console.log('File sorted params', params);
    }).on('fileuploaded', function(e, params) {
      console.log('File uploaded params', params);
    });
  },
  //下拉菜单
  initDropdown: function() {
    $('.dropdown-toggle').dropdown();
  },
  //提示
  initTooltip: function() {
    $('[data-toggle=tooltip]').tooltip({
      trigger: 'hover'
    });
    return false;
  },
  //弹窗
  initPopover: function() {
    $('[data-toggle=popover]').popover('show');
  },
  //windows系统滚动条优化
  initNavigator: function() {
    var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
    if (isWindows) {
      $('.sidebar .sidebar-wrapper').perfectScrollbar();
      $('.main.tab-content').perfectScrollbar();
    }
  },
  //typeahead初始化
  initTypeahead: function() {
    var subjects = [];
    $('.sidebar .sidebar-wrapper>.nav>li .nav li a').each(function() {
      subjects.push($(this).text());
    });
    $('#search').typeahead({
      source: subjects
    });
    //回车打开搜索内容
    $('#search').on('keyup', function(e) {
      var _this = this;
      if (e.which == 13) {
        $('.sidebar .sidebar-wrapper>.nav>li .nav li a').each(function() {
          if ($(this).text() == $(_this).val()) {
            $(this).trigger('click');
          }
        });
      }
    });
    //点击打开搜索内容
    $('.navbar .navbar-form .input-group').on('click', '.typeahead li a', function() {
      var _this = this;
      $('.sidebar .sidebar-wrapper>.nav>li .nav li a').each(function() {
        if ($(this).text() == $(_this).text()) {
          $(this).trigger('click');
        }
      });
    });
  },
  /*
   * sweet alert 2
   */
  initSweetAlert: function() {},
  /*
   * 警告框的设置 notify
   */
  initNotify: function() {},
  /*
   * 设置datetimepicker
   */
  initDatetimepicker: function() {
    $('.date.datepicker').datetimepicker({
      viewMode: 'days',
      keepOpen: false,
      allowInputToggle: true,
      focusOnShow: true,
      enabledHours: false,
      format: 'YYYY-MM-DD HH:mm:ss'
    });
    $(document).on('dp.change', '.date.datepicker', function() {
      $('.date.datepicker').data('DateTimePicker').hide();
    });
  },
  /*
   * 设置validator
   */
  initValidator: function() {},
  /*
   * 设置bootstrap table
   */
  initBootstrapTable: function() {
    // //先销毁表格
    $('.bootstrap-table').bootstrapTable('destroy').bootstrapTable({
      onLoadSuccess: function() {
        $('a[data-toggle=tooltip]').tooltip();
      }
    });
    $('.bootstrap-table').bootstrapTable('resetView');
  },
  /*
   * bootstrap-select初始化
   */
  initSelect: function() {
    $('.selectpicker').selectpicker('refresh');
    $('.editable-select').editableSelect({
      effects: 'fade'
    });
  },
  /**组件的初始化 end ****************************/


  /**页面渲染部分 start **************************/
  renderData: function() {
    //主题设置
    $('.switch-onColor').bootstrapSwitch();
    $('.nav.navbar-nav .theme .dropdown-menu>li>a').click(function(e) {
      e.stopPropagation();
    });
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
      var new_image = $(this).find('img').attr('src');
      var $sidebarBackground = $('.sidebar .sidebar-background');
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
    }

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
    }

    (function sidebarSwitch() {
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
    })();
    //显示设置页面
    $('.navbar-default .navbar-nav>li>a.settings').click(function() {
      $('.main-panel>.content').css('display', 'none');
      $('.main-panel>.index').css('display', 'none');
      $('.main-panel>.messages').css('display', 'none');
      $('.main-panel>.settings').css('display', 'block');
      if (!$('body').hasClass('sidebar-mini')) {
        $('#minimizeSidebar').trigger('click');
      }
    });
    $('.settings .tab-header .header-title').text($('.settings .nav.nav-stacked li.active a').text());
    $('.settings .nav.nav-stacked li a').click(function() {
      $('.settings .tab-header .header-title').text($(this).text());
    });
    /**
     * 消息设置页面
     */
    $('.navbar-nav>li>.dropdown-menu.per li').click(function() {
      $('.main-panel>.content').css('display', 'none');
      $('.main-panel>.index').css('display', 'none');
      $('.main-panel>.settings').css('display', 'none');
      $('.main-panel>.messages').css('display', 'block');
      if (!$('body').hasClass('sidebar-mini')) {
        $('#minimizeSidebar').trigger('click');
      }
      $('.messages .tab-header .header-title').text($('.messages .nav.nav-stacked li.active a').text());
      $('.messages .nav.nav-stacked li a').click(function() {
        $('.messages .tab-header .header-title').text($(this).text());
      });
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
    $(window).resize(function() {});
    $('.wrapper').on('mouseenter', '.sidebar.mini .sidebar-wrapper>.nav>li.list', function() {
      $('.sidebar.mini .collapse:not(.photoNo)').eq($(this).index()).css('display', 'block');
      $(this).addClass('triangle');
      $('.sidebar.mini .sidebar-wrapper>.nav li>a').click(function() {
        event.preventDefault();
      // event.stopPropagation();
      });
    }).on('mouseleave', '.sidebar.mini .sidebar-wrapper>.nav>li', function() {
      $('.sidebar.mini .collapse:not(.photoNo)').eq($(this).index()).css('display', 'none');
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
      }

      if ($(_this).closest('li').siblings().length == 0) {
        //如果是最后一个弹出提示
        swal({
          title: '已经是最后一个了!',
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
    $('.sidebar .sidebar-wrapper').on('click', '.nav ul li>a', function() {
      //判断此tab页有没有打开 如果打开定位到此tab页面 如果没有打开就显示此页
      if ($(this).hasClass('menu')) {
        console.log('menu');
      } else {
        if ($(this).hasClass('open')) {
          $('.navbar .navbar-brand a').text($(this).text());
          $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
          $(this).parent().addClass('active');
          $(this).parent().eq(0).parents('li').addClass('active');
          $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
          $('.main-panel>.settings').css('display', 'none');
          $('.main-panel>.index').css('display', 'none');
          $('.main-panel>.messages').css('display', 'none');
          $('.main-panel>.content').css('display', 'block');
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
          $('.main-panel>.settings').css('display', 'none');
          $('.main-panel>.index').css('display', 'none');
          $('.main-panel>.messages').css('display', 'none');
          $('.main-panel>.content').css('display', 'block');
        }
      }
    });

    /**
     * [openNewTab 点击按钮新开一个页面]
     * @param  {[type]} obj  [点击的目标]
     * @param  {[type]} id   [需要打开页面的id值]
     * @param  {[type]} name [标签页的名字]
     * @param  {[type]} url  [要打开页面的URL]
     * @return {[type]}      [null]
     */
    function openNewTab(obj, id, name, url) {
      obj.click(function() {
        //创建标签页
        var _this = $(this);
        var tab = $('<li role="presentation"><a href=' + '#' + id + ' role="tab" data-toggle="tab">' + name + '<i class="ti-close"></i></a></li>');
        $('.nav.nav-tabs.main').append(tab);
        //获取tab页内容
        $.get(url, function(data) {
          $('.main-panel .content .tab-content').prepend(data);
          $('.main-panel .content .tab-content #' + id).addClass('active');
        });
        $('.nav-tabs a[href=' + '#' + id + ']').tab('show');
        $('.main-panel>.settings').css('display', 'none');
        $('.main-panel>.index').css('display', 'none');
        $('.main-panel>.messages').css('display', 'none');
        $('.main-panel>.content').css('display', 'block');
      });
    }
    openNewTab($('.index .customer a'), 'customer', 'aaa', 'pages/customer.html');
  // $('.index .customer a').click(function() {
  //   //创建标签页
  //   var _this = $(this);
  //   var tab = $('<li role="presentation"><a href=' + '#' + $(this).attr('data-menu-id') + ' role="tab" data-toggle="tab">' + $(this).text() + '<i class="ti-close"></i></a></li>');
  //   $('.nav.nav-tabs.main').append(tab);
  //   //获取tab页内容
  //   $.get('pages/customer.html', function(data) {
  //     $('.main-panel .content .tab-content').prepend(data);
  //     $('.main-panel .content .tab-content #' + _this.attr('data-menu-id')).addClass('active');
  //   });
  //   $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').tab('show');
  //   $('.main-panel>.settings').css('display', 'none');
  //   $('.main-panel>.index').css('display', 'none');
  //   $('.main-panel>.messages').css('display', 'none');
  //   $('.main-panel>.content').css('display', 'block');
  // });
  },
/**页面渲染部分 end ****************************/
};
