import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório..." />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53960261?s=460&u=4d61258682a56949ef4ebca7ace4dba530f3a6d0&v=4"
            alt="Felipe Dias"
          />
          <div>
            <strong>rafael-lip/tindev</strong>
            <p>
              App baseado no Tinder voltado a conectar desenvolvedores e
              profissionais de TI
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53960261?s=460&u=4d61258682a56949ef4ebca7ace4dba530f3a6d0&v=4"
            alt="Felipe Dias"
          />
          <div>
            <strong>rafael-lip/tindev</strong>
            <p>
              App baseado no Tinder voltado a conectar desenvolvedores e
              profissionais de TI
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53960261?s=460&u=4d61258682a56949ef4ebca7ace4dba530f3a6d0&v=4"
            alt="Felipe Dias"
          />
          <div>
            <strong>rafael-lip/tindev</strong>
            <p>
              App baseado no Tinder voltado a conectar desenvolvedores e
              profissionais de TI
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
