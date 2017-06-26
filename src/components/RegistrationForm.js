import React from 'react';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

// {
//   return React.createElement('div', {},
//     React.createElement('form', {}, [
//       React.createElement('div', {},
//     ])
//   )
// }
