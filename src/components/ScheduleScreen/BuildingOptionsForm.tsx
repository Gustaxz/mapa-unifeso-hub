import { v4 as uuidV4 } from 'uuid'

const buildings: string[] | undefined = [
    'TESTE',
    'APCS',
    'Afif',
    'FBS',
    'Flavio',
    'PROARTE',
]

export function BuildingOptionsForm() {
    return (
        <>
            <option value="">Prédios</option>
            {buildings
                ? buildings.map(building => (
                      <option value={building} key={uuidV4()}>
                          {building}
                      </option>
                  ))
                : null}
        </>
    )
}
