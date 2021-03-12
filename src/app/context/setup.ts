import Dockerode, { ContainerInfo } from 'dockerode';

let dockerode = new Dockerode()

export interface DockerContext {
    Containers: Dockerode.ContainerInfo[];
    Networks: Dockerode.NetworkInspectInfo[];
    Images: Dockerode.ImageInfo[];
}

export const getContainers = async (): Promise<ContainerInfo[]> => {
    return new Promise<ContainerInfo[]>((resolve) => {
        let containers: ContainerInfo[] = []
        dockerode.listContainers(function (err: Error, c) {
            c?.forEach(container => {
                containers.push(container)
            });
        })
        console.log(containers)
        resolve(containers)
    });
}

export function getNetworks(ctx: DockerContext) {
    dockerode.listNetworks(function (err: Error, networks) {
        networks?.forEach(network => {
            ctx.Networks.push(network)
        })
    })
}

export function getImages(ctx: DockerContext) {
    dockerode.listImages(function (err: Error, images) {
        images?.forEach(image => {
            ctx.Images.push(image)
        })
    })
}
