## resize-antd-table
基于antd table实现的简单的列拖拽功能

## 安装
npm install -S resize-antd-table

## 引入
import Table from 'resize-antd-table';

## 使用

```
const columns = [
  {
    dataIndex: 'col1',
    key: 'col1',
    title: 'col1',
    width: 50
  },
  {
    dataIndex: 'col2',
    key: 'col2',
    title: 'col2'
  },
  {
    dataIndex: 'col3',
    key: 'col3',
    title: 'col3'
  },
  {
    dataIndex: 'col4',
    key: 'col4',
    title: 'col4'
  },
  {
    dataIndex: 'col5',
    key: 'col5',
    title: 'col5'
  }
];
const dataSource = [
  {
    key: 1,
    col1: 1,
    col2: 2,
    col3: 3,
    col4: 4,
    col5: 5
  },
  {
    key: 2,
    col1: 1,
    col2: 2,
    col3: 3,
    col4: 4,
    col5: 5
  }
];
<Table columns={columns} dataSource={dataSource} />
```
因为底层是基于antd的使用，只是添加了列调节的功能，因此api使用完成同antd
https://ant.design/components/table-cn/