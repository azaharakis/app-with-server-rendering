const emptyPromise = () => Promise.resolve();

export default ({ routes }) => {
    const matchedRoute = routes[routes.length - 1];
    const fetchData = matchedRoute.fetchData || emptyPromise;

    return fetchData();
}