import React, { Component, link } from 'react';
import { withNamespaces } from 'react-i18next';
import { Icon, Textfield, Tooltip } from 'react-mdl';
import construction from '../../images/under_construction.png';
import './textfields.css';

class TestTextFields extends Component {

  render() {

	const { t } = this.props;

    return(
      <div>
      <h1 className="textfields-header">TEXTFIELDS TO TEST</h1>
      <div class="test-textfield">
        <Tooltip label="Add textfield">
            <Icon name="add" />
        </Tooltip>
 		<div>
       		<Textfield
                onChange={() => {}}
                label="Text..."
                floatingLabel
            />
        </div>
        <div>
            <Textfield
                onChange={() => {}}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="Number..."
                floatingLabel
            />
        </div>

      </div>
      </div>
    )
  }
}

export default withNamespaces()(TestTextFields);