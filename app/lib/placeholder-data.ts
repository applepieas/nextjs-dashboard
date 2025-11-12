// This file contains placeholder data that is used to seed the database.
// In a real application, this data would come from a database or API.

import { Customer, Invoice, Revenue, User } from './definitions';

export const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: 'password123',
  },
];

export const customers: Customer[] = [
  {
    id: '3958dc9e-712f-404b-b78f-85dcceae9d84',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-712f-404b-b78f-85dcceae9d85',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-712f-404b-b78f-85dcceae9d86',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ec-8d3d-0242ac130003',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-712f-404b-b78f-85dcceae9d87',
    name: 'Carmella Alboz',
    email: 'carmella@alboz.com',
    image_url: '/customers/carmella-alboz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7d33f',
    name: 'Raul Moran',
    email: 'raul@moran.com',
    image_url: '/customers/raul-moran.png',
  },
];

export const invoices: Invoice[] = [
  {
    customer_id: '3958dc9e-712f-404b-b78f-85dcceae9d84',
    amount: 15795,
    status: 'pending',
    date: '2024-12-06',
    id: '0001',
  },
  {
    customer_id: '3958dc9e-712f-404b-b78f-85dcceae9d85',
    amount: 1050,
    status: 'pending',
    date: '2024-11-14',
    id: '0002',
  },
  {
    customer_id: '3958dc9e-712f-404b-b78f-85dcceae9d86',
    amount: 3000,
    status: 'paid',
    date: '2024-10-29',
    id: '0003',
  },
  {
    customer_id: '50ca3e18-62cd-11ec-8d3d-0242ac130003',
    amount: 44348,
    status: 'pending',
    date: '2024-10-18',
    id: '0004',
  },
  {
    customer_id: '3958dc9e-712f-404b-b78f-85dcceae9d87',
    amount: 34577,
    status: 'pending',
    date: '2024-10-30',
    id: '0005',
  },
  {
    customer_id: '76d65c26-f784-44a2-ac19-586678f7d33f',
    amount: 54246,
    status: 'paid',
    date: '2024-10-11',
    id: '0006',
  },
];

export const revenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];
