export class VehicleUpgradeStatements {
    vehicleUpgrades = [
        {
        toVersion: 1,
        statements: [
            `CREATE TABLE IF NOT EXISTS vehicle(
            vin Text PRIMARY KEY,
            license text,
            state text,
            make text,
            model text,
            trim text,
            year text,
            cylinders text,
            size text,
            type text,
            drive text,
            body text,
            miles text,
            oiltype text,
            oilcap text
            );`
        ]
        },
        /* add new statements below for next database version when required*/
        /*
        {
        toVersion: 2,
        statements: [
            `ALTER TABLE users ADD COLUMN email TEXT;`,
        ]
        },
        */
    ]
}
