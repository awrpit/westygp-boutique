import React from 'react';
import Options from './Options';
import MeasureModal from './MeasureModal';
import CopyModal from './CopyModal';

class MeasurementSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.uid,
    };
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Options />
          <MeasureModal uid={this.state.userId} />
          <CopyModal userId={this.state.userId} />
        </React.Fragment>
      </div>
    );
  }
}

export default MeasurementSelection;
