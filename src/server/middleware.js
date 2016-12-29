import page from './page';

export default (request, response) => {
    return response.status(200).send(page);
}