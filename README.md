<h4 align="left">My personal website</h2>
Forked from https://github.com/iamhiman/personal-webpage-v2

Project uses Next Js & TypeScript at core.
https://nextjs.org/docs


Done:
build a ci/cd pipeline for the project (done with github actions)

Make a dockerfile based on node 17.9.1(?)
-or check how project builds with the last version
see https://nextjs.org/docs/deployment#docker-image
https://github.com/vercel/next.js/tree/canary/examples/with-docker

build the code with  "npx next build"
then run docker build command, in dockerfile there should be
copying  of the .next directory to the image

pull repo, (maybe not pull, maybe github actions will trigger the pipeline)
install needed soft:(npm install next react react-dom)(?)
with github actions
-push the image to registry(dockerhub for now)
-run the image
-(configure nginx?)
--refactor dockerfile to multistage build


TODO:
-configure nginx to serve another subdomain for testing with proxying to different docker container
-add manual stage of deploying on main domain
-than some kind of smoke test
-add a button for resume downloading
