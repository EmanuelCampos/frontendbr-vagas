import React, { Component } from 'react';
import api from '../../services/api'
import logo from '../../images/logo.png'

import { List, Container, Loading } from './styles';

export default class Home extends Component {

  state = {
    loading: true,
    issues: [],
  }


  async componentDidMount() {

    const response = await api.get(`/repos/frontendbr/vagas/issues`, {
      params: {
        per_page: 5,
      }
    })

    this.setState({ issues: response.data, loading: false })


  }



  render() {
    const { issues, loading } = this.state

    if (loading) {
      return <Loading></Loading>
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
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                    <p>{issue.user.login}</p>
                  </strong>
                </div>


              </li>
            ))}
          </List>
        </Container>
      </>

    );

  }
}
