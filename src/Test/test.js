import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './Button2.module.css'; // Import regular stylesheet
class Test extends Component {
 
    render() {
    // reference as a js object
   
    return <button className={styles.error1}>Error Button</button>;
  }
}
export default Test;