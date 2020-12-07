import './styles/index.scss';
import _ from 'lodash';

const subHeader = document.createElement('h3');
subHeader.textContent = `counting to 5: ${_.range(5).map((v) => v + 1)}`;
document.body.appendChild(subHeader);
