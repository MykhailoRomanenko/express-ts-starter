import express, {ErrorRequestHandler} from 'express'
import * as bodyParser from 'body-parser'
import morgan from 'morgan'
import errorMiddleware from './middleware/error-handler.middleware'

class App {
    private static DEFAULT_PORT: number = 3000

    private app: express.Application

    constructor() {
        this.app = express()

        this.app.use(morgan('tiny'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(errorMiddleware as ErrorRequestHandler)
    }

    public listen() {
        const port = process.env.PORT || App.DEFAULT_PORT
        this.app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }
}

export default App




