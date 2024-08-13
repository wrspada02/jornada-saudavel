/**
 * ! Executing this script will delete all data in your database and seed it with 10 objetivoEspecialidade.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */

import prisma from '@/lib/prisma';
import { faker } from '@faker-js/faker';

const main = async () => {
  for (let i = 0; i < 10; i++) {
    await prisma.usuario.upsert({
      create: {
        data_nasc: faker.date.past(10),
        nome: faker.person.fullName(),
        tipo_atividade: faker.string.alpha(),
        altura: faker.number.float(),
        frequencia_atividade: faker.number.int({ min: 1, max: 5 }),
        peso: faker.number.float(),
        comentario: {
          create: {
            conteudo: faker.string.alphanumeric({ length: 300 }),
            post: {
              create: {
                conteudo: faker.string.alphanumeric({ length: 300 }),
                data_publicacao: faker.date.past(10),
                qtd_comentarios: faker.number.int({ min: 1, max: 5 }),
                qtd_likes: faker.number.int({ min: 1, max: 5 }),
                subtitulo: faker.string.alpha({ length: 100 }),
                tipo: faker.number.int({ min: 1, max: 2 }),
                titulo: faker.string.alpha({ length: 200 }),
                nutricionista: {
                  create: {
                    crn: faker.string.alphanumeric({ length: 300 }),
                    data_nasc: faker.date.past(20),
                    nome: faker.person.fullName(),
                    sobre: faker.string.alpha({ length: 300 }),
                    tempo_exp: faker.number.int({ min: 1, max: 5 }),
                    especialidade: {
                      create: {
                        nome: faker.string.alpha({ length: 50 }),
                      }
                    }
                  }
                }
              }
            }
          }
        },
        objetivo: {
          create: {
            nome: faker.string.alpha({ length: 50 }),
          }
        }
      },
      where: {
        id: faker.string.uuid(),
      },
      update: {},
    });
  }

  console.log("Database seeded successfully!");

  process.exit();
};

main();
