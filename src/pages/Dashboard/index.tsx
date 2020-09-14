import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img
        src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
        alt="Github Explorer"
      />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47608086?s=460&u=9ca44ce338e40d273522c0491a809370b422bbf7&v=4"
            alt="Vinicius"
          />
          <div>
            <strong>Rocketseat/teste</strong>
            <p>Teste para busca de repositorios no github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47608086?s=460&u=9ca44ce338e40d273522c0491a809370b422bbf7&v=4"
            alt="Vinicius"
          />
          <div>
            <strong>Rocketseat/teste</strong>
            <p>Teste para busca de repositorios no github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47608086?s=460&u=9ca44ce338e40d273522c0491a809370b422bbf7&v=4"
            alt="Vinicius"
          />
          <div>
            <strong>Rocketseat/teste</strong>
            <p>Teste para busca de repositorios no github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
