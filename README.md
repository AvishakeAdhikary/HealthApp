# Health App
This is a simple health app built using React that allows users to input their health data and assess their risk of diabetes. It consists of two main components: Input and Udata.

## Installation
To run the health app locally, follow these steps:

### Clone the repository:
```bash
git clone https://github.com/AvishakeAdhikary/HealthApp.git
```

### Navigate to the project directory:
```bash
cd HealthApp
```

### Install the dependencies:
```bash
npm install
```

### Start the development server:
```bash
npm start
```
Open your web browser and visit ```http://localhost:3000``` to access the health app.

## Components
### 1. Input
The Input component allows users to input their health data, including weight, height, gender, smoking habits, laziness level, pain status, and systolic blood pressure. Based on this data, the app assesses the user's risk of diabetes and displays a popup alert if necessary.

#### Usage
```jsx
import Input from "./Input";

const App = () => {
  return (
    <div>
      {/* ... */}
      <Input />
      {/* ... */}
    </div>
  );
};

export default App;
```
### 2. Udata
The Udata component handles user login functionality. It prompts the user to enter their name, email, heart rate, and birthday. Users can log in or log out, and their information is displayed when logged in.

#### Usage
```jsx
import Udata from "./Udata";

const App = () => {
  return (
    <div>
      {/* ... */}
      <Udata />
      {/* ... */}
    </div>
  );
};

export default App;
```
Dependencies
The health app relies on the following dependencies:

```react: ^18.2.0```
```react-date-picker: ^9.2.0```
```react-dom: ^18.2.0```
```react-scripts: ^5.1.0-next.14```

## License
This project is licensed under the MIT license. You can find the full license text in the LICENSE file.

## Contributing
Contributions to the Health App are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request on the GitHub repository.

## Acknowledgements
The health app was created by [Avishake Adhikary](https://github.com/AvishakeAdhikary). Special thanks to the contributors and the open-source community for their valuable contributions.

## Contact
If you have any questions or inquiries, please feel free to contact [Avishake Adhikary](mailto:avhishe.adhikary11@gmail.com).