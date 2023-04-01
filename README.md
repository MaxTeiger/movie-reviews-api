
## Badges


[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


# Movie Review API

A simple api project to interact with a mongoDB. The example is through Movie Reviews.

## Tech Stack

**Client:** N/A

**Server:** Node, Express

**Database:** MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. I recommend using [direnv](https://direnv.net/) or [dotenv](https://www.npmjs.com/package/dotenv) for exporting these values to your local environment if you want to develop easily without breaking your environment.


```bash
# .envrc
export MONGO_URI="mongodb+srv://<username>:<pwd>@<host>/"

# .env
MONGO_URI="mongodb+srv://<username>:<pwd>@<host>/"
```

To run locally you can use `docker-compose`.

```bash
docker-compose up --build
```

## Authors

- [@MaxTeiger](https://github.com/MaxTeiger)

