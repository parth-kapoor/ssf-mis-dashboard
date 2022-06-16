import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Label, Input, Button } from "reactstrap";

class DropDown extends React.Component {
  
    state = {
        dropdownList: [],
        selectedItem: ""
      };
  
    constructor(props) {

    super(props);

    console.log('_getIndex2',props.currentIndex,props.options[props.currentIndex]);

    if (props !== undefined) {
      this.state = {
        dropdownList: props.options,
        selectedItem: props.options[props.currentIndex]
      };

        // this.setState({
        //   dropdownList: props.options,
        //   selectedItem: props.options[props.currentIndex]
        // });
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== undefined) {
      this.setState({
        dropdownList: nextProps.options,
        selectedItem: nextProps.options[0]
      });
    }
  }

  getSelection() {
    return this.state.selectedItem;
  }

  setSelectedOption(selectedIndex) {
    this.props.onSelection(selectedIndex, this.props.options[selectedIndex]);
    this.setState({
      selectedItem: this.props.options[selectedIndex]
    });
  }

  helper(mOption, index) {
    

    if (this.state.selectedItem === mOption){
      console.log('_getIndex3',this.state.selectedItem);
      return <option selected>{mOption}</option>;
    }
      
    else return <option>{mOption}</option>;
  }

  render() {
    return (
      <Input
        type="select"
        onChange={e => this.setSelectedOption(e.target.selectedIndex)}
      >
        {this.props.options.map((mOption, index) => {
          return this.helper(mOption, index);
        })}
      </Input>
    );
  }
}

DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    onSelection: PropTypes.func.isRequired
  };

export default DropDown;
