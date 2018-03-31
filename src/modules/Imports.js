import getData from './GetData';

const gh = 'https://jobs.github.com/positions.json?description=&location=',
      so = 'https://stackoverflow.com/jobs/feed?';

const ghData = getData(gh, 'json'),
      soData = getData(so, 'xml');

export default {ghData, soData};