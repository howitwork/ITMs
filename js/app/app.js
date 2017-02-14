/*****************
 * 这个文件主要是业务逻辑处理 *
 *****************/

$(function() {
  /**
   * [routes 控制历史记录]
   * @type {Object}
   */
  function Router() {
    this.routes = {};
    this.currentUrl = '';
  }
  Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function() {};
  };
  Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    if (this.currentUrl == '') {
      location.href = '/index.html';
    } else {
      this.routes[this.currentUrl]();
    }
  };
  Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  };
  window.Router = new Router();
  window.Router.init();
  window.Router.route('/', function() {});
  window.Router.route('/settings', function() {
    $('.navbar-default .navbar-nav>li>a.settings').trigger('click');
  });
  window.Router.route('/lock', function() {
    window.history.replaceState(null, null, '#');
  });
  $('.lock').on('click', function() {
    window.location.href = './lock.html';
  });
  $('.sidebar .sidebar-wrapper>.nav li>a:not([data-toggle])').each(function() {
    var url = $(this).attr('href').slice(1);
    var _this = $(this);
    window.Router.route(url, function() {
      if (url.slice(1) == _this.attr('data-menu-id')) {
        _this.trigger('click');
      }
    });
  });
  // window.Router.route('/user', function() {
  //   console.log('user');
  // });
  // window.Router.route('/role', function() {
  //   console.log('role');
  // });
  // window.Router.route('/menu', function() {
  //   console.log('menu');
  // });
  var app = {
    getManagementPage: function(pageUrl) {
      $.get(pageUrl, function(data) {
        $('.main-panel .content .tab-content').prepend(data);
        branch.initBootstrapTable();
        branch.initSelect();
        branch.initFileinput();
      });
    },
    getOperationPage: function(operateUrl, title, width, showCancelButton) {
      $.get(operateUrl, function(data) {
        swal({
          title: title,
          html: data,
          width: width,
          showCancelButton: showCancelButton == 'true' ? true : false,
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
        }).then(function(result) {});
        branch.initSelect();
        branch.initDatetimepicker();
        branch.initFileinput();
      });
    }
  };

  app.getManagementPage('pages/systemManagement/user/userManagement.html');
  app.getManagementPage('pages/systemManagement/role/roleManagement.html');
  app.getManagementPage('pages/systemManagement/menu/menuManagement.html');
  app.getManagementPage('pages/projectManagement/list/projectList.html');
  app.getManagementPage('pages/projectManagement/application/application.html');
  app.getManagementPage('pages/projectManagement/stage/stage.html');
  app.getManagementPage('pages/demandManagement/demand.html');
  app.getManagementPage('pages/caseManagement/case.html');
  app.getManagementPage('pages/defectManagement/defect.html');
  app.getManagementPage('pages/updateManagement/update.html');
  //更新管理
  $(document).on('click', '#updateToolbar .updateAdd', function() {
    app.getOperationPage(
      'pages/updateManagement/edit.html',
      '新增更新',
      '65%',
      'true'
    );
  });
  window.operateEventsUpdate = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/updateManagement/view.html',
        '查看更新',
        '60%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/updateManagement/edit.html',
        '编辑更新',
        '65%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //缺陷管理
  $(document).on('click', '#defectToolbar .defectAdd', function() {
    app.getOperationPage(
      'pages/defectManagement/edit.html',
      '新增缺陷',
      '65%',
      'true'
    );
  });
  window.operateEventsDefect = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/defectManagement/view.html',
        '查看缺陷',
        '60%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/defectManagement/edit.html',
        '编辑缺陷',
        '65%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //案例管理
  $(document).on('click', '#caseToolbar .caseAdd', function() {
    app.getOperationPage(
      'pages/caseManagement/edit.html',
      '新增需求',
      '65%',
      'true'
    );
  });
  window.operateEventsCase = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/caseManagement/view.html',
        '查看需求',
        '60%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/caseManagement/edit.html',
        '编辑需求',
        '65%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //需求管理
  $(document).on('click', '#demandToolbar .demandAdd', function() {
    app.getOperationPage(
      'pages/demandManagement/edit.html',
      '新增需求',
      '65%',
      'true'
    );
  });
  window.operateEventsDemand = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/demandManagement/view.html',
        '查看需求',
        '60%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/demandManagement/edit.html',
        '编辑需求',
        '65%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //阶段管理
  $(document).on('click', '#stageToolbar .stageAdd', function() {
    app.getOperationPage(
      'pages/projectManagement/stage/edit.html',
      '新增阶段',
      '43%',
      'true'
    );
  });
  window.operateEventsStage = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/stage/view.html',
        '查看阶段',
        '40%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/stage/edit.html',
        '编辑阶段',
        '43%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //应用管理
  $(document).on('click', '#applicationToolbar .applicationAdd', function() {
    app.getOperationPage(
      'pages/projectManagement/application/edit.html',
      '新增应用',
      '43%',
      'true'
    );
  });
  window.operateEventsApplication = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/application/view.html',
        '查看应用',
        '40%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/application/edit.html',
        '编辑应用',
        '43%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //项目清单
  $(document).on('click', '#listToolbar .listAdd', function() {
    app.getOperationPage(
      'pages/projectManagement/list/edit.html',
      '新增项目',
      '43%',
      'true'
    );
  });
  window.operateEventsList = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/list/view.html',
        '查看项目',
        '40%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/projectManagement/list/edit.html',
        '编辑项目',
        '43%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //菜单管理
  $(document).on('click', '#menuToolbar .menuAdd', function() {
    app.getOperationPage(
      'pages/systemManagement/menu/add.html',
      '新增菜单',
      '65%',
      'true'
    );
  });
  window.operateEvents4 = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/menu/view.html',
        '查看菜单',
        '55%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/menu/edit.html',
        '编辑菜单',
        '65%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
  //角色管理
  $(document).on('click', '#roleToolbar .roleAdd', function() {
    app.getOperationPage(
      'pages/systemManagement/role/add.html',
      '新增用户',
      '43%',
      'true'
    );
  });
  window.operateEvents3 = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/role/view.html',
        '查看角色',
        '40%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/role/edit.html',
        '编辑角色',
        '43%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#contactTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };

  //用户管理
  $(document).on('click', '#userToolbar .userAdd', function() {
    app.getOperationPage(
      'pages/systemManagement/user/add.html',
      '新增用户',
      '43%',
      'true'
    );
  });
  window.operateEvents2 = {
    'click .view': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/user/view.html',
        '查看用户',
        '40%',
        'false'
      );
    },
    'click .edit': function(e, value, row, index) {
      app.getOperationPage(
        'pages/systemManagement/user/edit.html',
        '编辑用户',
        '43%',
        'true'
      );
    },
    'click .remove': function(e, value, row, index) {
      $('#userTable').bootstrapTable('remove', {
        field: 'caseNo',
        values: [row.caseNo]
      });
      return false;
    }
  };
});
