import { createHash, randomBytes, scryptSync } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import mysql from 'mysql2/promise';

const secureDirectory = '/home/ubuntu/secure';
const credentialFile = path.join(secureDirectory, 'shadows-of-the-city-owner-credentials.txt');

if (fs.existsSync(credentialFile)) {
  console.log('Owner credentials already exist in the secure handoff file.');
  process.exit(0);
}

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required to create owner credentials.');

const identifier = `SOTC-${randomBytes(4).toString('hex').toUpperCase()}`;
const password = `SotC_${randomBytes(18).toString('base64url')}`;
const salt = randomBytes(24).toString('hex');
const passwordHash = scryptSync(password, salt, 64).toString('hex');

const connection = await mysql.createConnection(process.env.DATABASE_URL);
await connection.execute(
  'INSERT INTO owner_credentials (identifier, passwordSalt, passwordHash, isActive) VALUES (?, ?, ?, 1)',
  [identifier, salt, passwordHash],
);
await connection.end();

fs.mkdirSync(secureDirectory, { recursive: true, mode: 0o700 });
fs.writeFileSync(credentialFile, `Shadows of the City — Owner Console\nIdentifier: ${identifier}\nPassword: ${password}\n`, { mode: 0o600 });
console.log('Owner credentials created and stored in the secure handoff file.');
