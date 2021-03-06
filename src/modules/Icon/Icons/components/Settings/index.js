import React from 'react';
import PropTypes from 'prop-types';
import './Settings.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Settings({ iconColor }) {
  return(
    <svg className="Settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>settings</title><path className="Settings-path" fill={ iconColor } d="M7.27 18.8l.25.17a7.85 7.85 0 0 0 2.64 1.12l.29.08.17 2.52a.51.51 0 0 0 .54.5h1.53a.51.51 0 0 0 .54-.5l.17-2.52.29-.08A7.85 7.85 0 0 0 16.32 19l.25-.17 1.9 1.65a.5.5 0 0 0 .37.12.4.4 0 0 0 .37-.17l1.07-1.07a.57.57 0 0 0 0-.74l-1.65-1.9.17-.25A7.85 7.85 0 0 0 20 13.8l.08-.29 2.52-.17a.51.51 0 0 0 .5-.54v-1.52a.51.51 0 0 0-.5-.54l-2.6-.17v-.28a7.85 7.85 0 0 0-1.12-2.64l-.17-.25 1.65-1.9a.53.53 0 0 0 0-.74l-1.15-1.08a.57.57 0 0 0-.74 0l-1.9 1.65-.25-.17A7.85 7.85 0 0 0 13.67 4l-.29-.08-.16-2.52a.51.51 0 0 0-.54-.5h-1.53a.51.51 0 0 0-.54.5l-.17 2.52-.28.08a7.85 7.85 0 0 0-2.64 1.12l-.25.17-1.9-1.65a.57.57 0 0 0-.74 0L3.55 4.75a.57.57 0 0 0 0 .74l1.65 1.9-.2.25a7.85 7.85 0 0 0-1.12 2.64l-.08.29-2.52.17a.51.51 0 0 0-.5.54v1.53a.51.51 0 0 0 .5.54l2.52.17.08.29A7.85 7.85 0 0 0 5 16.44l.17.25-1.65 1.9a.53.53 0 0 0 0 .74l1.07 1.07a.57.57 0 0 0 .74 0zm5.45 5.2h-1.53a1.39 1.39 0 0 1-1.36-1.28l-.12-1.9a8.4 8.4 0 0 1-2.35-1l-1.45 1.25A1.39 1.39 0 0 1 4 21l-1-1.09a1.34 1.34 0 0 1-.08-1.82l1.24-1.45a8.4 8.4 0 0 1-1-2.35l-1.9-.12A1.43 1.43 0 0 1 0 12.76v-1.52a1.39 1.39 0 0 1 1.28-1.37l1.9-.12a8.4 8.4 0 0 1 1-2.35L2.93 5.95A1.35 1.35 0 0 1 3 4.09L4 3a1.39 1.39 0 0 1 1.86-.08l1.49 1.25a8.4 8.4 0 0 1 2.35-1l.12-1.9A1.39 1.39 0 0 1 11.19 0h1.53a1.39 1.39 0 0 1 1.36 1.28l.12 1.9a8.4 8.4 0 0 1 2.35 1L18 2.93a1.39 1.39 0 0 1 1.87.07l1.07 1.07a1.35 1.35 0 0 1 .12 1.86l-1.23 1.46a8.4 8.4 0 0 1 1 2.35l1.9.12A1.39 1.39 0 0 1 24 11.24v1.53a1.39 1.39 0 0 1-1.28 1.36l-1.9.12a8.4 8.4 0 0 1-1 2.35l1.24 1.45a1.35 1.35 0 0 1-.06 1.86L19.91 21a1.42 1.42 0 0 1-1 .41 1.44 1.44 0 0 1-.91-.33l-1.45-1.24a8.4 8.4 0 0 1-2.35 1l-.12 1.9A1.43 1.43 0 0 1 12.72 24z" /><path className="Settings-path" fill={ iconColor } d="M12 9.33A2.67 2.67 0 1 0 14.67 12 2.65 2.65 0 0 0 12 9.33m0 6.1A3.43 3.43 0 1 1 15.43 12 3.41 3.41 0 0 1 12 15.43" /></svg>
  );
}


Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;
