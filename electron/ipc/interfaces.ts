import { IpcMainEvent } from 'electron'

export interface IpcRequest<T> {
    responseChannel?: string

    params?: T
}

export interface IpcChannelInterface<T> {
    getName(): string

    handle(event: IpcMainEvent, request: IpcRequest<T>): Promise<void>
}
