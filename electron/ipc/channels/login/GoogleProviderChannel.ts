import { IpcMainEvent } from 'electron'
import { IpcChannelInterface, IpcRequest } from '../../interfaces'
import { responseChannel } from '../factories/data/responseChannel'
import { emitErrorChannel } from '../factories/errors/errorChannel'
import electronLog from 'electron-log'
import { requiredReponseChannel } from '../factories/errors/responseChannel/requiredResponseChannel'
import { signInWithGoogle } from '../../../../app/infra/connections/login/providers/google'

export class GoogleProviderChannel implements IpcChannelInterface<any> {
    getName(): string {
        return 'login-google'
    }

    async handle(event: IpcMainEvent, request: IpcRequest<any>): Promise<void> {
        try {
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }

            const { result } = await signInWithGoogle()

            responseChannel(event, result, request.responseChannel)

            electronLog.error(`Client logged.`)
        } catch (error) {
            console.log(error)
            if (!request.responseChannel) {
                return requiredReponseChannel(event)
            }
            emitErrorChannel(
                event,
                'Não efetuar o login.',
                request.responseChannel
            )
            electronLog.error(`IPC Channel "${this.getName()}" found an error.`)
        }
    }
}
