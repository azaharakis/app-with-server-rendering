export default (app) => `
<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    </head>
    <body>
        <div id="wrapper">${app}</div>
        <script src="/public/bundle.js"></script>
    </body>
</html>
`;