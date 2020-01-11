import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import logo from '../../images/logo.png'


import { List, Container, Loading, Pagination, Span } from './styles'
import styled from 'styled-components';

export default function Home() {




  const [issues, setIssues] = useState([])
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true)

  async function loadApi() {

    const response = await api.get(`/repos/frontendbr/vagas/issues`, {
      params: {
        per_page: 5,
        page: pagina
      }
    })

    setIssues(response.data)
    setLoading(false)

  }


  useEffect(() => {
    loadApi()
  }, [loadApi, pagina]);


  if (loading) {
    return <Loading>Carregando</Loading>
  }

  return (
    <>
      <Container>
        <img src={logo} alt="frontendbr-vagas" />
        <p>Vagas para desenvolvedores front-end de todo o Brasil !</p>


        <List>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <Span background={"#" + label.color} key={String(label.id)}>{label.name}</Span>
                  ))}
                  <p>{issue.user.login}</p>

                </strong>
              </div>


            </li>
          ))}
        </List>
        <Pagination>
          <a onClick={() => { setPagina(pagina - 1) }}>&laquo;</a>
          <a onClick={() => { setPagina(1) }}>1</a>
          <a onClick={() => { setPagina(2) }}>2</a>
          <a onClick={() => { setPagina(3) }}>3</a>
          <a onClick={() => { setPagina(4) }}>4</a>
          <a onClick={() => { setPagina(5) }}>5</a>
          <a onClick={() => { setPagina(6) }}>6</a>
          <a onClick={() => { setPagina(pagina + 1) }}>&raquo;</a>
        </Pagination>
      </Container>

    </>

  );

}

