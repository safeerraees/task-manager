const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled');
//     } else {
//         console.log(req.method, req.path);
//         next();
//     }

// });

// app.use((req, res, next) => {
//         res.status(503).send('Website under maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    return {};
}
console.log(JSON.stringify(pet));