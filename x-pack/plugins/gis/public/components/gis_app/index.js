/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { connect } from 'react-redux';
import { GISApp } from './view';

function mapStateToProps(state = {}) {
  return {
    kbnCoreAPI: state.config
  };
}

const connectedGISApp = connect(mapStateToProps)(GISApp);
export { connectedGISApp as GISApp };