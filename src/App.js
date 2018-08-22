import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import Header from './composer/common/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <h2>{t('title')}</h2>
        </div>
        <div className="App-intro">
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t('description.part2')}</div>
      </div>
    );
  }
}

export default translate('translations')(App);