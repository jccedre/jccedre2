import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {Spring, animated } from 'react-spring';


import AnimatedBackdrop from '../Backdrop/AnimatedBackdrop';

const StyledModal = styled(animated.div)`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  padding: 1em;
  left: 0;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  color: ${props => props.theme.colors.black};

  &:focus {
    outline: none;
  }

  ${props => props.theme.media.medium`
    max-width: 1000px;
    width: 100%;
    height: 100%;
  `}

  ${props => props.theme.media.xlarge`
    top: 2%;
    left: calc(50% - 500px);
  `}
`;



class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
    // return (
    //   nextProps.show !== this.props.show ||
    //   nextProps.children !== this.props.children
    // );
  }

  componentDidUpdate(prevProps) {
    if (this.props.show === true && prevProps.show === false) {
      this.modalRef.current.focus();
    }
  }

  render() {
    return (
      <Fragment>
        <Spring 
          state={this.props.show ? 'show' : 'hide'}
          opacity={this.props.show ? 1 : 0}>
          {styles => (
            <AnimatedBackdrop
              clicked={this.props.modalClosed}
              show={this.props.show}
              zindex={this.props.show ? 7 : 2}
              color={this.props.color}
              style={styles}
            />
          )}
        </Spring>
        <Spring 
          state={this.props.show ? 'show' : 'hide'}
          opacity={this.props.show ? 1 : 0}>
          {styles => (
            <StyledModal
              key={'modal'}
              tabIndex='0'
              show={this.props.show ? 1 : 0}
              ref={this.modalRef}
              style={styles}
            >
              {this.props.children}
            </StyledModal>
          )}
        </Spring>
      </Fragment>

    );
  }
}

export default Modal;
