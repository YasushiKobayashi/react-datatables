import * as React from 'react';
import { css } from 'emotion';

import Input from './component/input/Input';
import Sort from './component/sort/Sort';

import DataTableModel, { DataTableModelInterface, ContentsType } from './models/DataTableModel';
import Order from './models/enum/Order';

interface KeyInterface {
  id: string;
  label: string;
}

type KeiesType = KeyInterface[];

interface Props {
  keies: KeiesType;
  contents: ContentsType;
  label?: string;
}

interface State {
  searchValue: string;
  keies: KeiesType;
  contents: DataTableModelInterface;
  order: Order;
  sortIndex: number;
}

const styleSearch = css({
  '& > div': {
    marginBottom: 10,
  },
  '& table': {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    '& th, td': {
      verticalAlign: 'middle',
      border: '1px solid rgba(0, 0, 0, 0.15)',
      padding: 5,
    },
  },
});

class DataTablesReact extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      searchValue: '',
      keies: [],
      contents: new DataTableModel(),
      order: Order.asc,
      sortIndex: 0,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentWillMount() {
    const { keies, contents } = this.props;
    this.setState({
      keies,
      contents: new DataTableModel(contents),
      order: Order.asc,
      sortIndex: 0,
    });
  }

  componentWillReceiveProps(nextProps: any) {
    const { keies, contents } = nextProps;
    this.setState({
      keies,
      contents: new DataTableModel(contents),
      order: Order.asc,
      sortIndex: 0,
    });
  }

  handleSort(key: string) {
    const { keies } = this.props;
    const { order } = this.state;
    this.setState({
      order: Order.changeSort(order),
      sortIndex: keies.findIndex(v => v.id === key),
    });
  }

  handleSearch(searchValue: string) {
    this.setState({
      searchValue,
    });
  }

  generateKey(): string {
    return Math.random()
      .toString(36)
      .slice(-8);
  }

  render() {
    const { keies, contents, searchValue, order, sortIndex } = this.state;
    const { label } = this.props;

    const th = keies.map(v => {
      return (
        <th
          key={v.id}
          onClick={() => {
            this.handleSort(v.id);
          }}>
          <span>{v.label}</span>
          <Sort order={order} />
        </th>
      );
    });

    const lists = contents.searchSort(searchValue, sortIndex, order).map(val => {
      const td = val.map(v => {
        const render = typeof v === 'string' ? <span dangerouslySetInnerHTML={{ __html: v }} /> : v;
        return <td key={this.generateKey()}>{render}</td>;
      });
      return <tr key={this.generateKey()}>{td}</tr>;
    });

    return (
      <div className={styleSearch}>
        <div>
          <Input label={label} value={searchValue} handleInput={this.handleSearch} />
        </div>
        <table>
          <thead>
            <tr>{th}</tr>
          </thead>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}

export { DataTablesReact as default, KeyInterface, KeiesType, ContentsType };
