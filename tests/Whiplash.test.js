import React from 'react';
import ReactDOM from 'react-dom';
import { whiplash } from 'src/modules/InformationalIcon/Icons';


describe('<whiplash />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<whiplash />, div);
  });

});
