# cocktails-app

This is an app that I had to develop for an Interview.

The goal of the app is to purpose 3 random cocktails to the user when he comes on the app

# Start the project

You can start the application in different way. You can either:

- Start it, once downloaded & installed using `pnpm dev` in dev mode/
- Start it, using the `pnpm build` command and serve the generated `dist/` folder as you want.
- Start it, using the docker file in the the repository. See the next section.

## Start it with docker

To start it with docker. It's pretty simple.

1. You must have docker installed & running on your computer.
2. You have to download the project.
3. Move to the root folder of the project using your favourite terminal & your cli.
4. Run the following command to build the image: `docker build -t cocktail-app .`
5. Run the following command to run a container using the image: `docker run -d -p 8080:80 cocktail-app`

### Infos about the Dockerfile

The Dockerfile uses multistagging to allow Docker to cache some steps of the build process. That's to allow faster redeployments.

The app is serve using nginx.
