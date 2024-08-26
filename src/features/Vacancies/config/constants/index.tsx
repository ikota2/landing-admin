
import CreateVacancyForm from '../../ui/CreateVacancyForm/CreateVacancyForm';
import DeleteVacancy from '../../ui/DeleteVacancy/DeleteVacancy';
import { IFormField, IList } from '../../model/types';
import {Tab} from '../../../../shared/ui/Tabs/model/types';
import Remote from '../../ui/DeleteVacancy/ui/Remote/Remote';
import Onsite from '../../ui/DeleteVacancy/ui/Onsite/Onsite';


export const FORM_FIELDS: IFormField[] = [
  {label: 'Тип', name: 'type', hasSelect: true},
  {label: 'Название', name: 'title'},
  {label: 'Зарплата', name: 'salary'},
  {label: 'Юзернэйм', name: 'username'}
];

export const LISTS: IList[] = [
  { title: 'Обязанности', name: 'responsibilities' },
  { title: 'Требования', name: 'requirements' },
  { title: 'Условия', name: 'conditions' },
];

export const actionTabs: Tab[] = [
  { name: 'Создать', content: <CreateVacancyForm /> },
  { name: 'Удалить', content: <DeleteVacancy /> },
];

export const vacancyTypeTabs: Tab[] = [
  {name: 'Удаленка', content: <Remote />},
  {name: 'На месте', content: <Onsite />}
]

// export const FORM_SCHEMA = {
//   title: z
//     .string()
//     .regex(/^[а-яА-Я\s]+$/, 'Название может содержать только русские буквы')
//     .regex(/^[^!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/, 'Название не может начинаться с пунктационного знака')
//     .min(1, 'Название не может быть пустым'),
//   salary: z
//     .string()
//     .regex(/^\d*$/, 'Зарплата должна состоять только из цифр'),
//   username: z
//     .string()
//     .startsWith('@', 'Юзернейм должен начинаться с @'),
//   responsibilities: z.array(z
//     .string()
//     .min(3, 'Длина строки должна быть не менее 3 символов')
//     .regex(/^[а-яА-Я\s]+$/, 'Только русские символы')
//     .regex(/^[^\d]/, 'Не может начинаться с цифр')),
//   requirements: z.array(z
//     .string()
//     .min(3, 'Длина строки должна быть не менее 3 символов')
//     .regex(/^[а-яА-Я\s]+$/, 'Только русские символы')
//     .regex(/^[^\d]/, 'Не может начинаться с цифр')),
//   conditions: z.array(z
//     .string()
//     .min(3, 'Длина строки должна быть не менее 3 символов')
//     .regex(/^[а-яА-Я\s]+$/, 'Только русские символы')
//     .regex(/^[^\d]/, 'Не может начинаться с цифр')),
//   type: z.enum(['remote', 'onsite']),
// };
