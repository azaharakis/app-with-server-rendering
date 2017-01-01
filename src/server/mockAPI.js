import mockData from './mockData.json'

export default (_, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(mockData);
};