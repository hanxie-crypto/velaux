import React from 'react';

type DataSource = Array<{ label: string; value: any }>;

type Props = {
  url: string;
};

type State = {};

class ClusterSelect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount = async () => {};

  render() {
    return <div></div>;
  }
}

export default ClusterSelect;
