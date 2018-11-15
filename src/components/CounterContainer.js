import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  number: state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: 'ADD' }),
  removeAction: () => dispatch({ type: 'REMOVE' }),
  addTenAction: () => dispatch({ type: 'ADD_TEN' }),
  removeTenAction: () => dispatch({ type: 'REMOVE_TEN' }),
  resetAction: () => dispatch({ type: 'RESET' }),
});


const CounterComponent = ({ number, addAction, addTenAction, resetAction, removeAction, removeTenAction  }) => (
  <div>
    <p>{number}</p>©
    <button onClick={addAction}>ADD_ONE</button>
    <button onClick={removeAction}>REMOVE_ONE</button>
    <button onClick={addTenAction}>ADD_TEN</button>
    <button onClick={removeTenAction}>REMOVE_TEN</button>
    <button onClick={resetAction}>RESET</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);