export default (app, data) => `
<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
        <link rel="stylesheet" href="/public/styles.css">
    </head>
    <body>
        <div id="wrapper">${app}</div>
        <script>
            var __hydrationData__ = ${JSON.stringify(data)};
        </script>
        <script src="/public/bundle.js"></script>
    </body>
</html>
`;