import React from 'react';
import withStyles, { css, WithStylesProps } from '../../composers/withStyles';
import SheetContext from './SheetContext';

export type Props = {
  /** Content that includes a sheet. */
  children: NonNullable<React.ReactNode>;
};

export type State = {
  visible: boolean;
};

/** Container in which to render sheets. */
export class SheetArea extends React.Component<Props & WithStylesProps, State> {
  state = {
    visible: false,
  };

  setSheetVisible = (visible: boolean) => {
    this.setState({ visible });
  };

  render() {
    const { styles, children } = this.props;
    const { visible } = this.state;

    return (
      <SheetContext.Provider value={this.setSheetVisible}>
        <div {...css(visible && styles.sheet_visible)}>{children}</div>
      </SheetContext.Provider>
    );
  }
}

export default withStyles(() => ({
  sheet_visible: {
    position: 'relative',
    overflow: 'hidden',
  },
}))(SheetArea);
