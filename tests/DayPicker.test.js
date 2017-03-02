import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DayPicker from 'src/modules/DatePicker/components/DayPicker';


describe('<DayPicker />', () => {

  const testFn = e => e.preventDefault();

  const defaultWrapper = mount(<DayPicker />);

  const wrapper = mount(
    <DayPicker
      active={ true }
      infoHeader="to"
      onDayClick={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DayPicker />, div);
  });

  it('should have a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('false');
    expect(defaultWrapper.props().active).to.equal(false);
  });

  it('should accept an active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(false);
    expect(wrapper.props().active).to.not.equal('true');
    expect(wrapper.props().active).to.equal(true);
  });

  it('should have a default infoHeader prop', () => {
    expect(defaultWrapper.props().infoHeader).to.not.equal(undefined);
    expect(defaultWrapper.props().infoHeader).to.not.equal('');
    expect(defaultWrapper.props().infoHeader).to.equal(null);
  });

  it('should accept an infoHeader prop', () => {
    expect(wrapper.props().infoHeader).to.not.equal(null);
    expect(wrapper.props().infoHeader).to.not.equal(undefined);
    expect(wrapper.props().infoHeader).to.not.equal('');
    expect(wrapper.props().infoHeader).to.equal('to');
  });

  it('should accept an onDayClick prop', () => {
    expect(wrapper.props().onDayClick).to.not.equal(null);
    expect(wrapper.props().onDayClick).to.not.equal(undefined);
    expect(wrapper.props().onDayClick).to.not.equal('');
    expect(wrapper.props().onDayClick).to.equal(testFn);
  });

  it('should have a default currentMonth state', () => {
    expect(wrapper.state().currentMonth).to.not.equal(null);
    expect(wrapper.state().currentMonth).to.not.equal(undefined);
    expect(wrapper.state().currentMonth).to.not.equal('0');
  });

  it('should have a default transition state', () => {
    expect(wrapper.state().transition).to.not.equal(null);
    expect(wrapper.state().transition).to.not.equal(undefined);
    expect(wrapper.state().transition).to.equal('');
  });

  it('should display the infoHeader in the UI if given', () => {
    expect(defaultWrapper.find('.DayPicker-feature-label').length).to.not.equal(1);
    expect(defaultWrapper.find('.DayPicker-feature-label').length).to.equal(0);
    expect(wrapper.find('.DayPicker-feature-label').length).to.not.equal(0);
    expect(wrapper.find('.DayPicker-feature-label').length).to.equal(1);
    expect(wrapper.find('.DayPicker-feature-label').text()).to.not.equal('');
    expect(wrapper.find('.DayPicker-feature-label').text()).to.equal('to');
  });

  it('should display the currentMonth state in the UI', () => {
    expect(wrapper.find('.DayPicker-header-title').text()).to.not.equal(null);
    expect(wrapper.find('.DayPicker-header-title').text()).to.not.equal(undefined);
    expect(wrapper.find('.DayPicker-header-title').text()).to.not.equal('');
    expect(wrapper.find('.DayPicker-header-title').text()).to.equal(moment().format('MMMM'));
  });

  it('should display the weekdays', () => {
    expect(wrapper.find('.DayPicker-week-li').length).to.not.equal(0);
    expect(wrapper.find('.DayPicker-week-li').length).to.not.equal(3);
    expect(wrapper.find('.DayPicker-week-li').length).to.not.equal(5);
    expect(wrapper.find('.DayPicker-week-li').length).to.equal(7);
  });

  it('should update the transition state when arrows clicked', () => {
    expect(wrapper.state().transition).to.equal('');
    // click prev
    wrapper.find('.prev').simulate('click');
    expect(wrapper.state().transition).to.equal('fadeOutRight');

    setTimeout(() => {
      expect(wrapper.state().transition).to.equal('fadeInLeft');
    }, 300);

    setTimeout(() => {
      expect(wrapper.state().transition).to.equal('');
    }, 800);

    // click next
    setTimeout(() => {
      wrapper.find('.next').simulate('click');
      expect(wrapper.state().transition).to.equal('fadeOutLeft');

      setTimeout(() => {
        expect(wrapper.state().transition).to.equal('fadeInRight');
      }, 300);

      setTimeout(() => {
        expect(wrapper.state().transition).to.equal('');
      }, 800);
    }, 1000);
  });

});
