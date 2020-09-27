This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#[Socket Client](https://maulik-soni.github.io/socket-client/) 
(Note : Due to SSL certificate conflict backend server does not work with github page.)

## Folder Structure
```
config ### Unit testing, Environment Variable setup, Webpack configuratino
docs ### Production Build folder, github page folder
node_modules ### Dependencies
public ### main index.html, static assets folder
scripts ### Development, Production and Unit Test run scripts
src/
    common/
        ClientSocket.js ### Wrapper class for calling Socket.io client
        utils.js ### Util file for making API call for home page 
    component/
        Chart.js ### main chart component for rendering chart with its configuration
        DataTable.js ### Showing chart data in Tabular format
        Home.js
        Live.js
        Loader.js
        Navbar.js
        Routing.js
    index.js
package.json
```

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Stack
- ReactJS
- Webpack : Used for package bundling
- MUI Theme : Used for bootstraping and fasten the development of basic UI element.
- JSS : Used for adding basic styling
- react-stockcharts, D3 - Used for OHLC chart
- Socket.io (Client) - For listening to pubsub backend streams

PS:
Due to some issue with chrome socket.io does not work properly when network goes down, It works properly with Firefox. [link](https://github.com/socketio/socket.io/issues/635#issuecomment-292029903).