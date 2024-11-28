import { User } from 'src/interfaces/User';

const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@fake.com',
    cats: [
      {
        name: 'Kitty',
        subscriptionActive: true,
        breed: 'Turkish Van',
        pouchSize: 'A',
      },
    ],
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Davies',
    email: 'johndavies@test.com',
    cats: [
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Bombay',
        pouchSize: 'A',
      },
      {
        name: 'Paws',
        subscriptionActive: true,
        breed: 'Chartreux',
        pouchSize: 'C',
      },
    ],
  },
  {
    id: '3',
    firstName: 'Sarah',
    lastName: 'Jayne',
    email: 'sarahjayne@fake.com',
    cats: [
      {
        name: 'Simba',
        subscriptionActive: true,
        breed: 'Turkish Van',
        pouchSize: 'C',
      },
      {
        name: 'Olive',
        subscriptionActive: true,
        breed: 'Maine Coon',
        pouchSize: 'C',
      },
      {
        name: 'Milo',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'F',
      },
    ],
  },
  {
    id: '4',
    firstName: 'Max',
    lastName: 'William',
    email: 'maxwilliam@fake.com',
    cats: [
      {
        name: 'Bella',
        subscriptionActive: true,
        breed: 'Turkish Van',
        pouchSize: 'A',
      },
      {
        name: 'Nella',
        subscriptionActive: true,
        breed: 'Ragdoll',
        pouchSize: 'B',
      },
      {
        name: 'Charlie',
        subscriptionActive: true,
        breed: 'Bengal',
        pouchSize: 'C',
      },
      {
        name: 'Tigger',
        subscriptionActive: false,
        breed: 'Abyssinian',
        pouchSize: 'D',
      },
    ],
  },
];

export default mockUsers;
