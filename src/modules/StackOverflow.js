import getData from './GetData';

const so = 'https://stackoverflow.com/jobs/feed?';
const soData = getData(so, 'xml');

export default soData;