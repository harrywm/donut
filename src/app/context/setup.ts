import Dockerode from 'dockerode';

let dockerode = new Dockerode()

export interface DockerContext {
    Containers: Dockerode.ContainerInfo[];
    Networks: Dockerode.NetworkInspectInfo[];
    Images: Dockerode.ImageInfo[];
}

export function getContainers(ctx: DockerContext) {
    dockerode.listContainers(function (err: Error, containers) {
        containers?.forEach(container => {
            ctx.Containers.push(container)
        });
    })
}

export function getNetworks(ctx: DockerContext){dockerode.listNetworks(function (err: Error, networks) {
    networks?.forEach(network => {
        ctx.Networks.push(network)
    })
})}

export function getImages(ctx: DockerContext){dockerode.listImages(function (err: Error, images) {
    images?.forEach(image => {
        ctx.Images.push(image)
    })
})
}
