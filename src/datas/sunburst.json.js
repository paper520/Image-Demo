let item1 = '#F54F4A';
let item2 = '#FF8C75';
let item3 = '#FFB499';

export default [{
  children: [{
    value: 5,
    children: [{
      value: 1,
      itemStyle: item1
    }, {
      value: 2,
      children: [{
        value: 1,
        itemStyle: item2
      }]
    }, {
      children: [{
        value: 1
      }]
    }],
    itemStyle: item1
  }, {
    value: 10,
    children: [{
      value: 6,
      children: [{
        value: 1,
        itemStyle: item1
      }, {
        value: 1
      }, {
        value: 1,
        itemStyle: item2
      }, {
        value: 1
      }],
      itemStyle: item3
    }, {
      value: 2,
      children: [{
        value: 1
      }],
      itemStyle: item3
    }, {
      children: [{
        value: 1,
        itemStyle: item2
      }]
    }],
    itemStyle: item1
  }],
  itemStyle: item1
}, {
  value: 9,
  children: [{
    value: 4,
    children: [{
      value: 2,
      itemStyle: item2
    }, {
      children: [{
        value: 1,
        itemStyle: item1
      }]
    }],
    itemStyle: item1
  }, {
    children: [{
      value: 3,
      children: [{
        value: 1
      }, {
        value: 1,
        itemStyle: item2
      }]
    }],
    itemStyle: item3
  }],
  itemStyle: item2
}, {
  value: 7,
  children: [{
    children: [{
      value: 1,
      itemStyle: item3
    }, {
      value: 3,
      children: [{
        value: 1,
        itemStyle: item2
      }, {
        value: 1
      }],
      itemStyle: item2
    }, {
      value: 2,
      children: [{
        value: 1
      }, {
        value: 1,
        itemStyle: item1
      }],
      itemStyle: item1
    }],
    itemStyle: item3
  }],
  itemStyle: item1
}, {
  children: [{
    value: 6,
    children: [{
      value: 1,
      itemStyle: item2
    }, {
      value: 2,
      children: [{
        value: 2,
        itemStyle: item2
      }],
      itemStyle: item1
    }, {
      value: 1,
      itemStyle: item3
    }],
    itemStyle: item3
  }, {
    value: 3,
    children: [{
      value: 1,
    }, {
      children: [{
        value: 1,
        itemStyle: item2
      }]
    }, {
      value: 1
    }],
    itemStyle: item3
  }],
  itemStyle: item1
}];