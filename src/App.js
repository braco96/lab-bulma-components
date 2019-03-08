import logo from './logo.svg';
import './App.css';
// Importamos Bulma una única vez para aplicar sus estilos globales.
import './bulma.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

/**
 * Componente principal de la aplicación.
 * Muestra ejemplos de los componentes creados con Bulma y React.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Campos de formulario de ejemplo */}
      <div className="container m-5">
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        {/* Botones de ejemplo con estilos dinámicos */}
        <CoolButton isSmall isDanger isRounded>
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        {/* Mensaje informativo de ejemplo */}
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    </div>
  );
}

export default App;
