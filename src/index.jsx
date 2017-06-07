import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import uuid from './common/uuid';
import tabSize from './util/resize';

const T = React.PropTypes;

class ResizeTable extends Component {
  static defaultProps = {
    resizeColumn: true
  };
  static propTypes = {
    resizeColumn: T.bool
  };

  componentDidMount() {
    //  设置列表可拖动
    if (this.props.resizeColumn) {
      let me = $(ReactDOM.findDOMNode(this));
      let table = me.find('table');
      let id = uuid();
      table.attr('id', id);
      tabSize.init(id);
      // 去掉所有col上面的width
      this.setColumnsWidth(id);
    }
  }

  setColumnsWidth = id => {
    let me = $(ReactDOM.findDOMNode(this));
    let table = me.find(`#${id}`);
    let colgroup = table.find('colgroup');
    let cols = colgroup.find('col');
    $(cols).each(function(index, el) {
      this.style.width = 'auto';
    });
  };

  render() {
    return <Table {...this.props} />;
  }
}

export default ResizeTable;
