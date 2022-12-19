export class Period {
    private readonly period: string

    get value() {
        return this.period
    }

    private verifyPeriodLength(period: number) {
        return period > 0 && period <= 40
    }

    constructor(period: number) {
        const isPeriodValid = this.verifyPeriodLength(period)

        if (!isPeriodValid) {
            throw new Error(
                'O período não está válido. Escolha um valor entre 0 e 40.'
            )
        }

        this.period = String(period)
    }
}
