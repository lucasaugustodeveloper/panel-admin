import React from 'react';

import './index.scss';

const Dashboard = () => (
  <div className="dashboard">
    Removido opção do card do material-ui pois o mesmo esta quebrado dentro da
    aplicação pois não esta achando a variavel <strong>@global</strong>, quando é feito o build da aplicação.
  </div>
);

export default Dashboard;
