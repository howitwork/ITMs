$(function() {
  var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };

  // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
  // as you saw in the previous example
  // var options = {
  //   width: 300,
  //   height: 200
  // };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object. As a third parameter we pass in our custom options.
  new Chartist.Line('#chart3', data);

  // // Initialize a Line chart in the container with the ID chart1
  // new Chartist.Line('#chart1', {
  //   labels: [1, 2, 3, 4],
  //   series: [[100, 120, 180, 200]]
  // });
  //
  // // Initialize a Line chart in the container with the ID chart2
  // new Chartist.Bar('#chart2', {
  //   labels: [1, 2, 3, 4],
  //   series: [[5, 2, 8, 3]]
  // });

  // Our labels and three data series
  var data4 = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
    series: [
      [5, 4, 3, 7, 5, 10],
      [3, 2, 9, 5, 4, 6],
      [2, 1, -3, -4, -2, 0]
    ]
  };

  // We are setting a few options for our chart and override the defaults
  var options4 = {
    // Don't draw the line chart points
    showPoint: false,
    // Disable line smoothing
    lineSmooth: false,
    // X-Axis specific configuration
    axisX: {
      // We can disable the grid for this axis
      showGrid: false,
      // and also don't show the label
      showLabel: false
    },
    // Y-Axis specific configuration
    axisY: {
      // Lets offset the chart a bit from the labels
      offset: 60,
      // The label interpolation function enables you to modify the values
      // used for the labels on each axis. Here we are converting the
      // values into million pound.
      labelInterpolationFnc: function(value) {
        return '$' + value + 'm';
      }
    }
  };

  // All you need to do is pass your configuration as third parameter to the chart function
  new Chartist.Line('#chart4', data4, options4);


  var chart = new Chartist.Line('#chart5', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 4, 2, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 8, 9, 3, 7, 2, 10, 5, 8, 1, 7, 10]
    ]
  }, {
    low: 0,
    showLine: false,
    axisX: {
      showLabel: false,
      offset: 0
    },
    axisY: {
      showLabel: false,
      offset: 0
    }
  });

  // Let's put a sequence number aside so we can use it in the event callbacks
  var seq = 0;

  // Once the chart is fully created we reset the sequence
  chart.on('created', function() {
    seq = 0;
  });

  // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
  chart.on('draw', function(data) {
    if (data.type === 'point') {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq++ * 80,
          // Duration of the animation
          dur: 500,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        },
        x1: {
          begin: seq++ * 80,
          dur: 500,
          from: data.x - 100,
          to: data.x,
          // You can specify an easing function name or use easing functions from Chartist.Svg.Easing directly
          easing: Chartist.Svg.Easing.easeOutQuart
        }
      });
    }
  });

  // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
  chart.on('created', function() {
    if (window.__anim0987432598723) {
      clearTimeout(window.__anim0987432598723);
      window.__anim0987432598723 = null;
    }
    window.__anim0987432598723 = setTimeout(chart.update.bind(chart), 8000);
  });

  //chart6

  var data6 = {
    series: [5, 3, 4]
  };

  var sum = function(a, b) {
    return a + b;
  };

  new Chartist.Pie('#chart6', data6, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data6.series.reduce(sum) * 100) + '%';
    }
  });

  //chart7
  //
  var data7 = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  };

  var options7 = {
    labelInterpolationFnc: function(value) {
      return value[0];
    }
  };

  var responsiveOptions7 = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];

  new Chartist.Pie('#chart7', data7, options7, responsiveOptions7);


  //chart8
  //
  var chart8 = new Chartist.Pie('#chart8', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  }, {
    donut: true,
    showLabel: false
  });

  chart8.on('draw', function(data8) {
    if (data8.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data8.element._node.getTotalLength();

      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data8.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });

      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition8 = {
        'stroke-dashoffset': {
          id: 'anim' + data8.index,
          dur: 1000,
          from: -pathLength + 'px',
          to: '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };

      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if (data8.index !== 0) {
        animationDefinition8['stroke-dashoffset'].begin = 'anim' + (data8.index - 1) + '.end';
      }

      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data8.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });

      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data8.element.animate(animationDefinition8, false);
    }
  });

  // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
  chart8.on('created', function() {
    if (window.__anim21278907124) {
      clearTimeout(window.__anim21278907124);
      window.__anim21278907124 = null;
    }
    window.__anim21278907124 = setTimeout(chart8.update.bind(chart8), 10000);
  });
});
