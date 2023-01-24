import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre nós/Sobre';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import Doacoes from './paginas/doacoes/Doacoes';
import CadastroPost from './components/postagens/cadastroPost/CadastroProduto';
import ListaProduto from './components/postagens/listapostagem/ListaProduto';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroProduto from './components/postagens/cadastroPost/CadastroProduto';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';

import store from './store/store';
import DeletarProduto from './components/postagens/deletarPostagem/DeletarPostagem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function App() {
  return (

    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/login' element={<Login />} />

            <Route path='/home' element={<Home />} />

            <Route path='/sobre' element={<Sobre />} />

            <Route path='/contato' element={<Contato />} />

            <Route path='/cadastrousuario' element={<CadastroUsuario />} />

            <Route path='/doacoes' element={<ListaProduto />} />

            <Route path="/formularioProduto" element={<CadastroProduto />} />

            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

            <Route path='/deletar/:id' element={<DeletarProduto />} />

            <Route path='/categoria' element={<ListaCategoria />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;